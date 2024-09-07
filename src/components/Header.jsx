import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Eshkhuvvatoff</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <div>
                    <div className="flex gap-4">
                        <h4><Link to={"/"}>Home</Link></h4>
                        <h4><Link to={"/"}>Contact</Link></h4>
                        <h4><Link to={"/"}>Games</Link></h4>
                        <h4><a href="https://www.utorrent.com/intl/ru/web/" target="_blank">Torrent Web</a></h4>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header
