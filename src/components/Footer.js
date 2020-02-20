import React from 'react'

const Footer = () => {
  return (
    <div className='ui  vertical footer segment'>
      <div className='ui divider' />
      <div className='ui center aligned container'>
        <div className='ui stackable grid'>
          <div className='three wide column'>
            <div className='ui link list'>
              <a className='ui header item' href='https://callisto.team'>Team. Callisto</a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui header'>Links</h4>
            <div className='ui link list'>
              <a className='item' href='https://callisto.team'>Webpage</a>
              <a className='item' href='https://discord.gg/jE33mfD'>Discord</a>
              <a className='item' href='https://github.com/callistoteam'>GitHub Repo</a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui header'>Projects</h4>
            <div className='ui link list'>
              <a className='item' href='https://wonderbot.xyz'>Wonder_Bot</a>
              <a className='item' href='https://github.com/callistoteam/parkbot'>Park_Bot</a>
              <a className='item' href='https://github.com/callistoteam/support'>Support</a>
              <a className='item' href='https://github.com/callistoteam/CoronaBot'>CoronaBot</a>

            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui header'>Contact</h4>
            <div className='ui link list'>
              <a className='item' href='https://discord.gg/jE33mfD'><i className='icon discord'/>Discord</a>
              <a className='item' href='mailto:support@callisto.team'><i className='icon mail'/>support@callisto.team</a>
            </div>

          </div>
        </div>
        <div className='ui section divider' />
        <div className='ui horizontal small divided link list'>
          <a className='item' target='_blank'>Copyright 2017-2019 Team. Callisto, All rights reserved.</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
