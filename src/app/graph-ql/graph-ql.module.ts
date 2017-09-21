
import gql from 'graphql-tag';

export const viewsName: any = gql`
    query viewsName {
        views{
            name
        }
    }
    `;

    export const viewsNameAndId: any = gql`
    query viewsName {
        views{
            id
            name
        }
    }
    `;

    export const view: any = gql`
    query views2 {
        view2{
            id
            name
            position_set{
                id
                graph_set{
                    partab
                    plot_code
                    graph_type{
                        description
                    }
                    line{
                        description
                    }
                    color{
                        description
                    }
                }
            }
        }
    }
    `;
