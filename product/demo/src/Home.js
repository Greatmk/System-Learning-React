import React from 'react';
class Home extends React.Component{
    render(){
        return (
            <div style={{ color: 'red',fontSize: '20px',letterSpacing: '2px'}}>
               欢迎来到React的奇妙世界
               <h3 style={{marginTop: '20px', color: 'blue'}}>接下来即将彻底拿下React及React Native两座高山</h3>
               <h3 style={{marginTop: '30px', color: 'purple'}}>开发一款横空出世手机App</h3>
            </div>
        )
    }
}
export default Home