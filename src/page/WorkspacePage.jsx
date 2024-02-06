import ChatBar from "../component/ChatBar";
import GlobalNavBar from "../component/GlobalNavBar";
import SideNavBar from "../component/SideNavBar";
import ChannelMain from "../component/ChannelMain";
import ChannelMenuBar from "../component/ChannelMenuBar";

const WorkspacePage = () =>{
    return (
        <>
            <GlobalNavBar/>
            <SideNavBar/>
            <ChannelMain/>
            <div style={{ marginLeft: 'auto' }}>
                <ChannelMenuBar />
             </div>
           
        </>
    )
}

export default WorkspacePage; 