import React from 'react';
import { 
    Header, 
    Hero, 
    WhoWeAre, 
    WhatWeDo, 
    WhatWeCanOffer, 
    Services, 
    CTA, 
    Footer 
} from '../components';

function Home() {
    return (    
        <main>
            <Header />
            <Hero />
            <div className="container">
                <WhoWeAre />
                <WhatWeDo />
                <WhatWeCanOffer />
                <Services />
            </div>
            <CTA />
            <Footer />
        </main>
    )
}

export default Home;