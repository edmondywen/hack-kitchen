import React, { useReducer, useState } from "react";

export const ScoreContext = React.createContext({});

//reducer set up
const initialUser = {
  salty: 0,
  sweet: 0,
  healthy: 0,
  experimental: 0,
};

// pass in dispatch with an object of type and payload

//example: dispatchUserProfile({ type: "changeSaltyBy", payload: 5})
//increases salty score by 5
const userProfileChanger = (userProfile, action) => {
  switch (action.type) {
    case "changeSaltyBy": {
      return {
        ...userProfile,
        salty: userProfile.salty + action.payload,
      };
    }

    case "changeSweetBy": {
      return {
        ...userProfile,
        sweet: userProfile.sweet + action.payload,
      };
    }

    case "changeHealthyBy": {
      return {
        ...userProfile,
        healthy: userProfile.healthy + action.payload,
      };
    }

    case "changeExperimentalBy": {
      return {
        ...userProfile,
        experimental: userProfile.experimental + action.payload,
      };
    }
  }
};

function ScoreProvider(props) {
  //state variable for progression

  //Number 0-10 for how many questions completed
  const [progression, setProgression] = useState(0);

  //reducer for the user's profile
  const [userProfile, dispatchUserProfile] = useReducer(
    userProfileChanger,
    initialUser
  );

  return (
    <ScoreContext.Provider
      value={{
        progression,
        setProgression,
        userProfile,
        dispatchUserProfile,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}

export function MenuPage(props) {
  <ScoreProvider>
    <MenuPageContent />
  </ScoreProvider>;
}

//put in your page content here
export function MenuPageContent(props) {
  return <div>This is our menu content page!</div>;
}
