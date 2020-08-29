/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import axios from 'axios';
import SkyLight from 'react-skylight';

class OrgButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgs: '',
    };
  }

  componentDidMount() {
    const { url } = this.props;
    axios(url)
      .then(response => {
        this.setState({
          orgs: response.data,
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
      });
  }

  render() {
    const { orgs } = this.state;
    const dialog = {
      maxHeight: '100%',
      marginTop: '-400px',
      marginLeft: '-35%',
      overflowY: 'scroll',
      position: 'fixed',
      width: '70%',
    };
    return (
      <div>
        <section>
          <button className="button is-success mt-3" type="button" onClick={() => this.simpleDialog.show()}>View Organizations</button>
        </section>
        <SkyLight dialogStyles={dialog} hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
          <h2 className="title is-2 has-text-black">Organizations</h2>
          <div className="column org-space">
            <div id="list" className="org-container">
              {orgs ? orgs.map(org => (
                <div className="card" key={org.id}>
                  <div className="card-image">
                    <figure className="image is-square">
                      <img src={org.avatar_url} alt="" />
                    </figure>
                  </div>
                  <div className="card-context">
                    <div className="desc is-capitalized">
                      <h3 className="title is-3 has-text-black login">{org.login}</h3>
                    </div>
                  </div>
                </div>
              )) : null}
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}

OrgButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default OrgButton;
