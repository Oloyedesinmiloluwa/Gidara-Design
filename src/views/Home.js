import React, { useState } from 'react'
import './home.scss';
import CustomAppBar from './../CustomAppBar';
import CustomButton from './../CustomButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button'
import Footer from './../Footer';
import LandingSectionWithCards from './../LandingSectionWithCards';
import CardGroup from './../CardGroup';
import SliderGroup from './../SliderGroup';

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

            <LandingSectionWithCards verticalText="What we do">
                <p>You are in great company</p>
                <h2>Gidara seeks to connect young talented musicians with world class producers, managers etc</h2>
                <CustomButton style={{ marginRight: '25px' }} point="left" dark />
                <CustomButton point="right" dark />

                <CardGroup />
            </LandingSectionWithCards>

            <div className="our-mentors">
                <h2 className="text-center">Our Mentors</h2>
                <SliderGroup />
            </div>

            <LandingSectionWithCards
                verticalText="Resources"
                viewAllButton={<Button className="button-right">VIEW ALL RESOURCES<ArrowRightAltIcon /></Button>}
            >
                <p>Resources for student artists</p>
                <CardGroup />

            </LandingSectionWithCards>

            <LandingSectionWithCards
                verticalText={""}
                viewAllButton={<Button className="button-right">VIEW ALL RESOURCES<ArrowRightAltIcon /></Button>}
            >
                <p>Resources for graduate artists</p>
                <CardGroup />

            </LandingSectionWithCards>

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
