import React from 'react';
import { Link } from 'react-router'
import './cdemo.css'
class Cdemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             users: [
                 {name: 'zhang_san', age: 18},
                 {name: 'li_si', age: 22},
                 {name: 'wang_wu', age: 15},
                 {name: 'xiao_huang', age: 28},
                 {name: 'zhang_xiao', age: 30},
                 {name: 'spring', age: 12}
             ]
        }
    }
    // handleClick(){
    //     let str = window.location.hash.split('/');
    //     let a_name = str[2];
    //     let a_age =  str[3];
    //     alert('您点击的是姓名为:' + a_name + ',年龄为:' + a_age)
    // }
    render(){
        return (
            <div>
                <h3> Cdemo默认页面</h3>
                {
                    this.state.users.map( (v,i) => {
                        let whereTo = `/Cdemo/${v.name}/${v.age}`;
                        return (
                            <h4 key={i} style={{ color: 'blue'}}>
                                 <Link to={whereTo} activeClassName='active'>姓名:{v.name} &nbsp; &nbsp; 年龄:{v.age}</Link>
                            </h4>
                        )
                    })
                }
                <Link to='/Home'><button style={{ marginTop: '20px', background: 'blue', color: '#fff'}}>点击返回主页</button></Link>
            </div>
        )
    }
}
export default Cdemo