const Maps = () => {
    return(
        <div className="container-map bottom-map mt-5">
            <h2 className="text-black"> Alamat Kantor </h2>
            <span  className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
                <iframe className="mt-3"
                    title="Map API" 
                    width="100%" 
                    height="300" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=microdata%20indonesia+(microdata%20indonesia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
        </div>
    )
}

export default Maps;