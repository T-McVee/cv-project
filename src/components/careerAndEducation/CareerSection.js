import React, { Component } from 'react'
import '../../styles/career.css'

export default class CareerSection extends Component {
  render() {
    return (
      <section className="career section">
        <h2>Experience</h2>
        <div className="experience-overview">
          <div className="entry">
            <div className="row">
              <div className="col col-date">Sep 2017 - current</div>
              <div className="col col-details">
                <div className="position">Marketing Manager</div>
                <div className="company">FIFO Innovations</div>
                <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magni sequi at blanditiis, quibusdam beatae aut nemo. Soluta, delectus repellendus!</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
