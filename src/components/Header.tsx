import React from 'react';

const Header: React.FC = () => {
  const scrollToFirst = () => {
    const fe = document.getElementById('first');
    if(fe) {
      fe.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSecond = () => {
    document.getElementById('second')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThird = () => {
    document.getElementById('third')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFourth = () => {
    document.getElementById('fourth')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
    <h1 className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#!" className="logo nav-list__link--active">
            Danil <strong>«Dorley» </strong> Valiev
          </a>
          
          







        </div>
      </div>
    </h1>
    <h2 className="header" id="first">   
    <div className="header_wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em> <span style={{color: 'white'}}> Danil </span> </em></strong> <br/>
            
        </h1> 
        <div className="header__text">
            <p>a 1st year student at Innopolis University</p> <br/>
            <p>and a beginner front-end developer</p> <br/>
        </div>
        <a className = "btn" >Scroll!</a>
    </div>
    </h2>
    </header>
  );
};

export default Header;
