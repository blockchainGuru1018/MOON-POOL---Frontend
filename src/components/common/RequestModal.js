import React from 'react';
import socket from '../../services/socket';
import { useNavigate } from 'react-router-dom';


const RequestModal = ({ open, handleClose, player }) => {
  const hidden = { display: 'none' };
  const show = { display: 'block' };
  const navigate = useNavigate();
  const acceptRequest = () => {
    socket.emit('accept-request', player);
    navigate('/onedetail');
    handleClose();
  }

  const rejectRequest = () => {
    socket.emit('reject-request', player);
    handleClose();
  }
  return (
    <div style={open ? show : hidden} className="modal login-modal sign-in">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button onClick={handleClose} type="button" className="close" ><span aria-hidden="true">&times;</span></button>
          <div className="modal-body">
            <div className="tab-centent">
              <div className="tab-pane fade show active">
                <div className="header-area">
                  <h5 className="">{`${!!player && player.username}'s requesting now...`}</h5>
                </div>
                <div className="form-area">
                  <ul className="nav l-nav" role="tablist">
                    <li className="nav-item" role="presentation">
                      {/* <Link type="button" className="nav-link mybtn2 active" id="pills-m_login-tab" data-toggle="pill" role="tab" aria-controls="pills-m_login" to="/onedetailr">Accept</Link> */}
                      <a type="button" className="nav-link mybtn2 active" onClick={acceptRequest} >Accept</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a type="button" className="nav-link mybtn2" onClick={rejectRequest} >Reject</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default RequestModal;