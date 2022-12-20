import React, { useEffect } from 'react';
import {
  Table, Container,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import Mission from './Misson';

const MissionsContainer = () => {
  const missionsObj = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Container fluid className="table-responsive-sm">
      <Table className="my-3 table-bordered table-striped">
        <thead>
          <tr>
            <td><b>Mission</b></td>
            <td><b>Description</b></td>
            <td><b>Status</b></td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missionsObj.map((m) => (
            <Mission
              key={m.missionId}
              missionId={m.missionId}
              missionName={m.missionName}
              description={m.description}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsContainer;
