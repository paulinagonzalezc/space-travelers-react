import PropTypes from 'prop-types';
import {
  Badge, Button,
} from 'react-bootstrap';

const Mission = ({ missionId, missionName, description }) => (
  <>
    <tr key={missionId}>
      <td><b>{missionName}</b></td>
      <td>
        {description}
      </td>
      <td className="px-4 align-middle">
        <Badge className="bg-info">Active Member</Badge>
      </td>
      <td className="px-4 align-middle">
        <Button variant="outline-danger">Leave&nbsp;Mission</Button>
      </td>
    </tr>

  </>
);

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
