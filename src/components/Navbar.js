import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function Navbar() {
  return (
    <Menu color="blue" widths={6} pointing secondary>
      <Menu.Item as={Link} to="/page1">
        Page1
      </Menu.Item>

      <Menu.Item as={Link} to="/stock">
        股票
      </Menu.Item>

      <Dropdown item text="Page2">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/page2-1">
            page2-1
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/page2-2">
            page2-2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
