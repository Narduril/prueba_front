import Grid from '@mui/material/Grid';

const GridContainer = () => {
  const contentsList = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 10' },
    { name: 'Item 11' },
    { name: 'Item 12' },
    { name: 'Item 13' },
    { name: 'Item 14' },
    { name: 'Item 15' },
    { name: 'Item 16' }
  ];

  return (
    <Grid container spacing={2}>
      {contentsList.map((item, index) => {
        return (
          <Grid key={`${item.name}-${index}`} item xs={12} sm={6} md={4} lg={3}>
            <h1>{item.name}</h1>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridContainer;
