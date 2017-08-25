import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolbarAdd from './Toolbar.js';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = () => (
  <AppBar
    title="Testing and configuring the AppBar"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Navbar;

