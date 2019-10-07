import { Input, List, Avatar, Icon, Button, shape, icon, Menu, Dropdown, message } from 'antd';
import React from 'react'
import styles from './styles';
import Layout from '../../components/Layout/index';
import "./style.css";

const { Search } = Input;


function handleMenuClick(e) {
    console.log('click', e);
}

function handleMenuClick1(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="down" />1st item</Menu.Item>
        <Menu.Item key="2"><Icon type="down" />2nd item</Menu.Item>
        <Menu.Item key="3"><Icon type="down" />3rd item</Menu.Item>
    </Menu>
);

const menu1 = (
    <Menu onClick={handleMenuClick1}>
        <Menu.Item key="1"><Icon type="down" />1st item</Menu.Item>
        <Menu.Item key="2"><Icon type="down" />2nd item</Menu.Item>
        <Menu.Item key="3"><Icon type="down" />3rd item</Menu.Item>
    </Menu>
);

export default class UserDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }


    render() {

        return (
            <Layout>
                <div style={styles.container}>
                    <div style={styles.navbar}>
                        <a style={styles.navbarLink} href="https://www.w3schools.com">Projects </a>&nbsp; / &nbsp;
                        <a style={styles.navbarLink} href="https://www.w3schools.com"> aaa</a>
                    </div>
                    <div>
                        <h2><b>Backlog</b></h2>
                    </div>
                    <div style={styles.info}>
                        <Search style={styles.btnSearch} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        <img style={styles.img} src="https://2sao.vietnamnetjsc.vn/images/2019/08/11/14/44/linh-ka-8.jpg" />
                        <Button style={styles.btn} type="primary" shape="circle" icon="user-add" />  |
                        <Dropdown overlay={menu}>
                            <Button style={styles.dropdown} >
                                Epics <Icon type="down" />
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={menu1}>
                            <Button style={styles.dropdown} >
                                Label <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </div>

                    {/* sprint1 */}
                    <div style={styles.content}>
                        <div style={styles.contentHeader}>
                            <div style={{ marginRight: '10px' }}><Icon type="down" /></div>
                            <div><h3> AAA Sprint 1 <span style={{ color: '#6B778C', fontSize: '15px' }}>5 issues</span></h3></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button style={styles.btn3} type="primary" >20</Button>
                            <Button style={styles.btn2} type="primary" >45</Button>
                            <Button style={styles.btn1} type="primary" >20</Button>
                            <Button style={styles.btn} >Complete sprint</Button>
                            <Dropdown overlay={menu1}>
                                <Button style={styles.btn} >
                                    <Icon type="small-dash" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div style={styles.mainContent}>

                        <div style={styles.mainContentHeader}>
                            <p>gggg</p>
                            <p>7/Oct/19 03:06 AM . 21/Oct/19 03:06</p>
                        </div>

                        <div style={styles.mainContentMain}>
                            <div className="mainContentMain1" style={{ backgroundColor: '#DEEBFF', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111 </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ backgroundColor: '#FFEBE6', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Icon style={{ marginRight: '10px', color: 'red' }} type="flag" />
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon type="plus" />&nbsp;Create issue
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* end sprint1 */}


                    {/* sprint2 */}
                    <div style={styles.content}>
                        <div style={styles.contentHeader}>
                            <div style={{ marginRight: '10px' }}><Icon type="down" /></div>
                            <div><h3> AAA Sprint 1 <span style={{ color: '#6B778C', fontSize: '15px' }}>5 issues</span></h3></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button style={styles.btn3} type="primary" >20</Button>
                            <Button style={styles.btn2} type="primary" >45</Button>
                            <Button style={styles.btn1} type="primary" >20</Button>
                            <Button style={styles.btn} >Complete sprint</Button>
                            <Dropdown overlay={menu1}>
                                <Button style={styles.btn} >
                                    <Icon type="small-dash" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div style={styles.mainContent}>

                        <div style={styles.mainContentHeader}>
                            <p>gggg</p>
                            <p>7/Oct/19 03:06 AM . 21/Oct/19 03:06</p>
                        </div>

                        <div style={styles.mainContentMain}>
                            <div className="mainContentMain1" style={{ backgroundColor: '#DEEBFF', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111 </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ backgroundColor: '#FFEBE6', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Icon style={{ marginRight: '10px', color: 'red' }} type="flag" />
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon type="plus" />&nbsp;Create issue
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* end sprint2 */}


                    {/* sprint3 */}
                    <div style={styles.content}>
                        <div style={styles.contentHeader}>
                            <div style={{ marginRight: '10px' }}><Icon type="down" /></div>
                            <div><h3> AAA Sprint 1 <span style={{ color: '#6B778C', fontSize: '15px' }}>5 issues</span></h3></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button style={styles.btn3} type="primary" >20</Button>
                            <Button style={styles.btn2} type="primary" >45</Button>
                            <Button style={styles.btn1} type="primary" >20</Button>
                            <Button style={styles.btn} >Complete sprint</Button>
                            <Dropdown overlay={menu1}>
                                <Button style={styles.btn} >
                                    <Icon type="small-dash" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div style={styles.mainContent}>

                        <div style={styles.mainContentHeader}>
                            <p>gggg</p>
                            <p>7/Oct/19 03:06 AM . 21/Oct/19 03:06</p>
                        </div>

                        <div style={styles.mainContentMain}>
                            <div className="mainContentMain1" style={{ backgroundColor: '#DEEBFF', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111 </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Button style={styles.btn1} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ backgroundColor: '#FFEBE6', border: '1px solid #8C8C8C', display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon style={{ backgroundColor: '#11FB0D', color: 'white' }} type="area-chart" />
                                    <span style={{ marginLeft: '10px' }}>AAA-1 111</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Icon style={{ marginRight: '10px', color: 'red' }} type="flag" />
                                    <Button style={styles.btn3} type="primary" >20</Button>
                                    <Dropdown overlay={menu1}>
                                        <Button style={styles.btn} >
                                            <Icon type="small-dash" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mainContentMain1" style={{ display: 'flex', alignItems: 'center', height: '42px', paddingLeft: '20px', flexDirection: 'row', borderRadius: '10px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon type="plus" />&nbsp;Create issue
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* end sprint3 */}


                </div>
            </Layout>

        )
    }
}
