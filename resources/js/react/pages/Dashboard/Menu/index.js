import React, {Component} from 'react';

import {FaChartArea, FaTag, FaBookmark, FaHome, FaBook} from 'react-icons/fa';

import {Content, Item, SubMenus, SubMenu} from './styles';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                <Item
                    onClick={() => this.props.menuChange('dashboard')}
                    selected={this.props.menu == 'dashboard' ? true : false}>
                    <FaChartArea />
                    <h2>Dashboard</h2>
                </Item>
                <Item
                    blockHover>
                    <FaTag />
                    <h2>Price and Availability</h2>
                </Item>
                <SubMenus>
                    <SubMenu
                        onClick={() => this.props.menuChange('calendar')}
                        selected={this.props.menu == 'calendar' ? true : false}
                    >Calendar</SubMenu>

                    <SubMenu
                        onClick={() => this.props.menuChange('rate')}
                        selected={this.props.menu == 'rate' ? true : false}
                    >Rate plan</SubMenu>
                </SubMenus>
                <Item
                    onClick={() => this.props.menuChange('reservations')}
                    selected={this.props.menu == 'reservations' ? true : false}>
                    <FaBookmark />
                    <h2>Reservations</h2>
                </Item>
                <Item
                    onClick={() => this.props.menuChange('property')}
                    selected={this.props.menu == 'property' ? true : false}>
                    <FaHome />
                    <h2>Property Management</h2>
                </Item>
                <Item
                    onClick={() => this.props.menuChange('accounting')}
                    selected={this.props.menu == 'accounting' ? true : false}>
                    <FaBook />
                    <h2>Accounting</h2>
                </Item>
            </Content>
        )
    }
}

export default Menu;