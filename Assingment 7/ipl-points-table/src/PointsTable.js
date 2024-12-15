import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsTable = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
                console.log(response.data); // Log the response data for debugging
                const sortedTeams = response.data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedTeams);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>IPL Points Table 2022</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches Played</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Points</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.No}>
                            <td>{team.No}</td>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.Points}</td>
                            <td>{team.NRR}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PointsTable;