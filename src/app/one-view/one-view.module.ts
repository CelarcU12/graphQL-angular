import gql from 'graphql-tag';

export const station: any = gql`
    query {
        stationData {
          value
          date
        }
        }
    `;
