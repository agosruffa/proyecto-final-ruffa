import React from 'react';
import './Footer.css';
import { Button } from 'semantic-ui-react'

const Footer = () => (
  <div className="Footer">
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
)

export default Footer

