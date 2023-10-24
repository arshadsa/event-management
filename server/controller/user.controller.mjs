import User from "../models/user.model.mjs";
import confirmMailTemp from "../utils/confirmMail.temp.mjs";
import sendMail from "../utils/sendMail.mjs";
import handleError from "../utils/errorHandler.mjs";
import genereateJwt from "../utils/generateJwt.mjs";

export async function listUsers(req, res) {
  try {
    // const users = await User.find({ status: "active" }).select("-password");
    const users = await User.find().select("-password");
    res.status(200).json({
      success: true,
      users
    })
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function profile(req, res) {
  try {
    console.log(req.user);
    const id = req.user.id;
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      user
    })
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function createUser(req, res) {
  try {
    const { role, email, userName, userImage } = req.body;
    if (role === "admin" || role === "moderator") {
      return res.status(401).send("You can't perform this action");
    }
    const user = await User.create(req.body);
    user.generateConfirmationToken();
    const updatedUser = await user.save({ validateBeforeSave: true });
    const token = genereateJwt({ id: user._id, status: user.status, role: user.role });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);
    sendMail({
      user: updatedUser,
      subject: "Verify Your Email Address.",
      template
    })
    res.status(200).json({
      success: true,
      user: { email, userName, userImage, token }
    });
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide your credentials!"
      })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user found. Please create an account!"
      })
    }
    const comparePassword = await user.comparePassword(password, user.password)
    if (!comparePassword) {
      return res.status(403).json({
        success: false,
        message: "Email or password is not correct!"
      })
    }
    const { userName, userImage, status, role } = user.toObject();
    const token = genereateJwt({ id: user._id, status, role });
    res.status(200).json({
      success: true,
      message: "Successfully log in.",
      data: {
        user: { userName, userImage },
        token
      }
    })
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function confirmEmail(req, res) {
  const token = req.query.token
  const user = await User.findOne({ confirmationToken: token });
  if (!user) {
    return res.send(`
                  <html>
                      <body>
                          <h1 style="text-align:center">Invalid Token!</h1>
                      </body>
                  </html>
              `);
  }
  user.status = "active";
  user.confirmationToken = undefined;
  user.confirmationTokenExpires = undefined;
  user.save({ validateBeforeSave: true });
  res.redirect(process.env.FRONTEND_URL);
}

export async function updateProfile(req, res) {
  try {
    const id = req.user.id;
    const {
      userName,
      contactNumber,
      userImage,
      password,
      ...rest } = req.body;
    const update = { userName, contactNumber, userImage, password };
    const option = { new: true, runValidators: true };
    await User.findByIdAndUpdate(id, update, option);
    res.status(200).json({
      status: true,
      message: "Account successfully updated",
    });
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function controlUser(req, res) {
  try {
    const email = req.params.email;
    const update = { status: req.body.status, role: req.body.role };
    const option = { new: true, runValidators: true };
    await User.findOneAndUpdate({ email }, update, option);
    res.status(200).json({
      status: true,
      message: "User successfully updated",
  });
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success: false,
      message
    })
  }
}

export async function deleteUser(req, res){
  try{
    const email = req.params.email;
    const result = await User.findOneAndDelete({email});
    if(!result){
      return res.status(404).json({
        success:false,
        message:"No user found!"
      })}
    else {
      res.status(200).json({
        success:true,
        message:"User successfully deleted!"
      })
    }
  } catch (error) {
    const message = handleError(error);
    res.status(400).json({
      success:false,
      message
    })
  }
}