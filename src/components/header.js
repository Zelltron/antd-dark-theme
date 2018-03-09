import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Header extends Component {
  state = {
  current: '1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  // these links can be conditional
  renderLinks() {
    return [
      // <Menu.Item className="nav-item" key={2}>
      //   <Link className="nav-link" to="/Page2"><span><Icon type="mail" /><span>Page-2</span></span></Link>
      // </Menu.Item>
      <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dropdown 1</span></span>}>
        <Menu.Item className="nav-item" key="sub1-2">
          <Link className="nav-link" to="/Page2">
            Page-2
          </Link>
        </Menu.Item>
      </SubMenu>
    ];
  }

  render() {
    return (
      <Menu onClick={this.handleClick} className="navbar" theme="dark" selectedKeys={[this.state.current]} style={{ width: 256 }} mode="inline">
         <Menu.Item className="nav-item" key={1}>
           <Link to="/" className="navbar-brand"><span><Icon type="home" /><span>Home</span></span></Link>
          </Menu.Item>
          {this.renderLinks()}
          <SubMenu key="sub2" title={<span><Icon type="smile-o" /><span>Dropdown 2</span></span>}>
            <Menu.Item className="nav-item" key="sub2-1">
              <Link className="nav-link" to="/Page3">
                Page-3
              </Link>
            </Menu.Item>
          </SubMenu>
      </Menu>
    );
  }
}

export default Header;
