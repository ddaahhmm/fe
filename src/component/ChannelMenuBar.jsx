const ChannelMenuBar = () => {
  return (
  <div className="ChannelMenuBar">
    <div className="thread">
    <img src= "https://cdn-icons-png.flaticon.com/512/2400/2400549.png" style={{width :'30px', height :'30px'}}/>
    스레드
    </div>
    <div className="alert">
    <img src= "https://cdn-icons-png.flaticon.com/512/4116/4116413.png" style={{width :'30px', height :'30px'}}/>
    알림
    </div>
    <div className="fixedMessage">
    <img src= "https://cdn-icons-png.flaticon.com/512/2972/2972186.png" style={{width :'30px', height :'30px'}} />
    고정메세지
    </div>
    <div className="memberList">
    <img src= "https://cdn-icons-png.flaticon.com/512/1357/1357616.png" style={{width :'30px', height :'30px'}}/>
    멤버목록
    </div>
    <div className="searchChat">
    <input style= {{ width: "200px", height:"30px" }} type="text" 
        placeholder="검색하기" />
    </div>
    <div className="receivedMessage">
    <img src= "https://cdn-icons-png.flaticon.com/512/2571/2571000.png" style={{width :'30px', height :'30px'}}/>
    받은메세지
    </div>
    
   


  </div>
  )
}

export default ChannelMenuBar;