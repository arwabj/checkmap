import React from 'react';
import {Map, GoogleApiWrapper} from 'google-map-react';
import {Container} from 'react-bootstrap';

function MapContainer(props) {
    return(
        <div className='mapcadre'>
            <Container>
                <Map
                google={props.google}
                zoom={10}
                initialCenter={{
                    lat: 36.8065,
                    lng: 10.1815,
                }}
                scrollwheel= {false}
                style={{ // le style de la carte
                  width: '60%',
                  height: '70%',
                  margin:'auto',
                  position:'absolute'
                  
                }}


                />
            </Container>

        </div>
    );
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDbg7kIc-h37hQh8-8qAp3KGnQE-GuJJc'})// GOOGLE_MAPS_API_KEY
    (MapContainer);