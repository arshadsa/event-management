import Card from "./Card";

const CardList = () => {
    const cardData = [
      {
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'Event Planing',
        description: 'Leave the details to us. Our experienced event planners will handle every aspect of your event, from conceptualization to execution. We ensure that your event is seamless and memorable.',
        reverse: false,
      },
      {
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVudWV8ZW58MHx8MHx8fDA%3D',
        heading: 'Venue Selection',
        description: 'Finding the perfect venue is crucial for any event. Our team will help you choose the ideal location that suits your events theme, size, and budget.',
        reverse: true,
      },
      {
        image: 'https://plus.unsplash.com/premium_photo-1683707120444-7318975c7ba6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D',
        heading: 'Catering',
        description: 'Delight your guests with exquisite cuisine. We work with top-notch catering services to create a menu that matches your events style and dietary preferences.',
        reverse: false,
      },
      {
        image: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVudGVydGFpbm1lbnR8ZW58MHx8MHx8fDA%3D',
        heading: 'Entertainment',
        description: 'Keep your guests entertained throughout the event. We can arrange for live bands, DJs, performers, and other entertainment options to create a memorable experience.',
        reverse: true,
      },
      {
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1hcmtldGluZyUyMGFuZCUyMFByb21vdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        heading: 'Marketing and Promotion',
        description: 'Maximize your events reach with our marketing and promotion services. We will create a tailored strategy to attract your target audience and ensure a successful turnout',
        reverse: false,
      },
      {
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJ1ZGdldCUyME1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D',
        heading: 'Budget Management',
        description: 'We understand the importance of staying within your budget. Our team will work diligently to manage your finances and allocate resources efficiently.',
        reverse: true,
      },
    ];
  
    return (
      <div className="container mx-auto mt-8">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default CardList;