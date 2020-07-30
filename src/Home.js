import React, { useState } from 'react'
import './home.scss';
import CustomAppBar from './CustomAppBar';
import CustomButton from './CustomButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button'
import Footer from './Footer';

const Home = () => {

    return (
        <div className="landing-page">
            <div className="landing-section">
                <CustomAppBar />
                <div className="landing-group">
                    <div className="landing-text">
                        <p>Your music career success partner</p>
                        <h1>We back Nigerian indie artists from around the world and help them do their best work</h1>
                        <p>We invest between N2m - N5m in marketing, production and promotional fees in young budding Nigerian artists and help them suceed with design support and our network of successful Indie musicians</p>
                        
                    </div>
                    <div className="landing-image"></div>
                </div>
                
                <CustomButton />
            </div>

            <div className="in-great-company">
                    <hr />
                    <div className="in-great-company-body">
                        <h2 id="what-we-do" className="text-vertical">What we do</h2>
                        <div>
                            <p>You are in great company</p>
                            <h2>Gidara seeks to connect young talented musicians with world class producers, managers etc</h2>
                            <CustomButton style={{marginRight: '25px'}} point="left" dark />
                            <CustomButton point="right" dark />

                            <div className="card-group">
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                    </div>
                        </div>

                        
                    </div>

                    
                </div>

                <div className="our-mentors">
                    <h2 className="text-center">Our Mentors</h2>
                <div className="slider-group">
                    <div className="slider">
                        <div className="slider-image"></div>
                        <div className="slider-body">
                        <div className="slider-button" style={{ margin: '45px 0px 10px 0px' }}>
                                <CustomButton style={{marginRight: '25px'}} point="left" />
                            <CustomButton point="right" />
                            </div>
                            <h3>Timbaland</h3>
                            <p>Timothy Zachary Mosley, known professionally as Timbaland, is an
                            American record producer, rapper, singer, songwriter, and DJ.
                            Timbaland's first full credit production work was in 1996 on
                            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-image"></div>
                        <div className="slider-body">
                        <div className="slider-button" style={{ margin: '45px 0px 10px 0px' }}>
                                <CustomButton style={{marginRight: '25px'}} point="left" />
                            <CustomButton point="right" />
                            </div>
                            <h3>Timbaland</h3>
                            <p>Timothy Zachary Mosley, known professionally as Timbaland, is an
                            American record producer, rapper, singer, songwriter, and DJ.
                            Timbaland's first full credit production work was in 1996 on
                            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider-image"></div>
                        <div className="slider-body">
                            <div className="slider-button" style={{ margin: '45px 0px 10px 0px' }}>
                                <CustomButton style={{marginRight: '25px'}} point="left" />
                            <CustomButton point="right" />
                            </div>
                            <h3>Timbaland</h3>
                            <p>Timothy Zachary Mosley, known professionally as Timbaland, is an
                            American record producer, rapper, singer, songwriter, and DJ.
                            Timbaland's first full credit production work was in 1996 on
                            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="in-great-company">
                    <hr />
                    <div className="in-great-company-body">
                        <h2 id="what-we-do" className="text-vertical">What we do</h2>
                        <div>
                            <p>You are in great company</p>
                            <h2>Gidara seeks to connect young talented musicians with world class producers, managers etc</h2>
                            <CustomButton style={{ marginRight: '25px'}} point="left" />
                            <CustomButton point="right" />

                            <div className="card-group">
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image"></div>
                            <div className="card-text">
                            <h3>One</h3>
                            <p>Place any text you want here etc.
                            We invest between N2m - N5m in
                            marketing, production and
                            promotional fees.
                            </p>
                            </div>
                        </div>
                    </div>
                        </div>
                        
                    </div>

                    <Button className="button-right">VIEW ALL RESOURCES<ArrowRightAltIcon /></Button>

                </div>

                <div className="subscribe-section">
                <p className="text-center">Great updates</p>
                <h4 className="text-center">Sign up to our newsletter to get updates on events, news and opportunities</h4>
                <form>
                    <input
                        type="text"
                        placeholder="Username or email"
                    />
                    <button>Subscribe</button>
                </form>
                
                </div>
                <Footer />
        </div>
    )
}

export default Home
