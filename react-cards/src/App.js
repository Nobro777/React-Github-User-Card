import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import GithubCards from './components/GithubCards';
import Axios from 'axios';
import GithubFollowers from './components/GithubFollowers';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
background: linear-gradient(to right, #9FB8AD, #42C4CE)
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      mylogin: "",
      myid: "",
      mybio: "",
      mylocation: "",
      myfollowing: [],
      myavatar: "",
      myfollowers: [],
    };
    console.log("constructor = working")
  }

  componentDidMount() {
    Axios
      .all([
        Axios.get("https://api.github.com/users/nobro777"),
        Axios.get("https://api.github.com/users/nobro777/followers")
      ])
      .then(
        Axios.spread((userResp, followerResp) => {
          // do something with both responses
          console.log("My Data Response", userResp.data);
          console.log("My Followers Data Response", followerResp);

          this.setState({
            mylogin: userResp.data.login,
            myid: userResp.data.id,
            mybio: userResp.data.bio,
            mylocation: userResp.data.location,
            myfollowerslist: userResp.data.followers,
            myfollowing: userResp.data.following,
            myavatar: userResp.data.avatar_url,
            myurl: userResp.data.html_url,
            myfollowers: followerResp.data,
          })

          // this.setState({
          //   login: userRes.data.login,
          //   avatarURL: userRes.data.avatar_url,
          //   name: userRes.data.name,
          //   location: userRes.data.location,
          //   url: userRes.data.html_url,
          //   bio: userRes.data.bio,
          //   followers: followerRes.data
          // });
        })
      );
  }
componentDidUpdate() {
  console.log("CDU = working")
}


render(){
  return (
      <StyledContainer className="container">
        <Heading />

        <h4 style={{ display: 'flex', width: '50%', margin: '1% 0 1% 25%'}}>My GitHub Info: </h4>
        
        <GithubCards 
          mylogin= {this.state.mylogin}
          myid= {this.state.myid}
          mybio= {this.state.mybio}
          mylocation= {this.state.mylocation}
          myfollowers= {this.state.myfollowers_url}
          myfollowing= {this.state.myfollowing}
          myfollowerslist= {this.state.myfollowerslist}
          myavatar= {this.state.myavatar}
          myurl= {this.state.myurl}
        />

        <div>
        <h4 style={{ display: 'flex', width: '50%', margin: '1% 0 1% 25%'}}>My Followers: </h4>
        
        {this.state.myfollowers.map(elem => (
          <GithubFollowers 
          mylogin={elem.login}
          myid={elem.id}
          mynode={elem.node_id}
          myurl= {elem.html_url}
          />
        ))}
        </div>
      </StyledContainer>
  );
}
}

export default App;
