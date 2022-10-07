import Grid from '@mui/material/Grid';
import Card from '../../core/card';

const GridContainer = () => {
  const contentsList = [
    {
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: '170',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
    },
    {
      id: 'cGjFJlmqNPIwU59AOcY8H',
      brand: 'Acer',
      model: 'Liquid Z6 Plus',
      price: '250',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg'
    },
    {
      id: '8hKbH2UHPM_944nRHYN1n',
      brand: 'Acer',
      model: 'Liquid Z6',
      price: '120',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg'
    },
    {
      id: 'xyPoqGJxYR4Nn3yVGQcfI',
      brand: 'Acer',
      model: 'Iconia Tab 10 A3-A40',
      price: '230',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg'
    },
    {
      id: 'ND1elEt4nqZrCeFflDUZ2',
      brand: 'Acer',
      model: 'Liquid X2',
      price: '230',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg'
    },
    {
      id: 'pMZMhe_ZaAPZoaCCtlDrg',
      brand: 'Acer',
      model: 'Liquid Jade 2',
      price: '',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg'
    },
    {
      id: 'ke-gsQbO8qH9PQ-zcdiAJ',
      brand: 'Acer',
      model: 'Liquid Zest Plus',
      price: '200',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg'
    },
    {
      id: 'meQvyTcXACAwWn3wCKSw6',
      brand: 'Acer',
      model: 'Liquid Zest',
      price: '110',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg'
    },
    {
      id: 'qSyO-2wbNUssUhBb2waew',
      brand: 'Acer',
      model: 'Predator 8',
      price: '350',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/qSyO-2wbNUssUhBb2waew.jpg'
    },
    {
      id: 'ypkE9xhckmUbS1UJRm5dS',
      brand: 'Acer',
      model: 'Liquid Z330',
      price: '110',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/ypkE9xhckmUbS1UJRm5dS.jpg'
    },
    {
      id: '80vJ3yDbtzNIgn_I8Y2m_',
      brand: 'Acer',
      model: 'Liquid Z320',
      price: '90',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/80vJ3yDbtzNIgn_I8Y2m_.jpg'
    },
    {
      id: 'Cu6y7RudjqPTBIYvW6QXd',
      brand: 'Acer',
      model: 'Liquid Z630S',
      price: '',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/Cu6y7RudjqPTBIYvW6QXd.jpg'
    }
  ];

  return (
    <Grid container spacing={5}>
      {contentsList.map((item, index) => {
        return (
          <Grid key={`${item.id}-${index}`} item xs={12} sm={6} md={4} lg={3}>
            <Card
              image={item.imgUrl}
              brand={item.brand}
              model={item.model}
              price={item.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridContainer;
