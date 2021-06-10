
// import React, { useState } from 'react'
// import Logo from '../../Asset/sidenav-logo.png'
// import DownArrow from '../../Asset/DownArrow.png'
// import Item from '../../Asset/navitem.png'
// import { NavLink, Link } from 'react-router-dom'
// import classes from "./SideNav.module.css"

// function SideNav() {
    
//     const [showSubList, setShowSubList] = useState('')
    
//     const links = [
// 		{
// 			id: 10, title: 'NavItems One', link: '/aaaa', subList: [
// 				{ id: 101, title: 'Item1', link: '/aaaa/aaaa' },
// 				{ id: 102, title: 'Item2', link: '/aaaa/aaaaa' },
// 				{ id: 103, title: 'Item3', link: '/aaaa/aaaaaa' },
// 			]
// 		},
// 		{
// 			id: 20, title: 'NavItems Two', link: '/aaaav', subList: [
// 				{ id: 201, title: 'Item1', link: '/aaaav/aaaavv' },
// 				{ id: 202, title: 'Item2', link: '/aaaav/aaaavvvvVVV' },
// 				{ id: 203, title: 'Item3', link: '/aaaav/aaaavvvv' },
// 			]
// 		},
// 	]


//     return (
//         <div className={classes.SideDrawer}>
//             <Link className={classes.Logo}>
//                 <img src={Logo} alt="Logo" classname='img-fluid' />
//             </Link>
//             <div className='mt-3'>
// 						{links.map(item => (
// 							<div key={item.id}>
// 								{/* mainList */}
// 								<NavLink
// 									onClick={() => setShowSubList(showSubList !== item.id && item.id)}
// 									to={item.link}
// 									activeClassName={classes.Active}
// 									className={classes.Link} 
//                                 >
// 									<img src={Item} alt="Item" className={classes.Icon + ' img-fluid'} />
// 									<span>{item.title}</span>
// 									{item.subList ? <img className={classes.HasSubList} src={DownArrow} alt="DownArrow" /> : null}
// 								</NavLink>

// 								{/* subList */}
// 								{showSubList === item.id &&
// 									<>
// 										{item.subList &&
// 											<div className={classes.SubListItems}>
// 												{item.subList.map(el => (
// 													<NavLink
// 														key={el.id}
// 														to={el.link}
// 														activeClassName={classes.Active}
// 														className={classes.SubLink + ' link d-block w-100 text-color-2 text-14 f-400'}
// 													>
// 														{el.title}
// 													</NavLink>
// 												))}
// 											</div>}
// 									</>
// 								}
// 							</div>
// 						))}

// 					</div>
     
//         </div>
//     )
// }

// export default SideNav
