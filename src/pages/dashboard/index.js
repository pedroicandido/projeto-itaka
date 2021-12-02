import { useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  List,
  Divider,
  Badge,
} from "@material-ui/core";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Icon1 from "../../assets/customIcons/icon1.png";
import Icon2 from "../../assets/customIcons/icon2.png";
import Icon3 from "../../assets/customIcons/icon3.png";
import Icon4 from "../../assets/customIcons/icon4.png";
import Card from "../../components/card";
import useStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { setKinship } from "../../redux/actions/kinshipActions";
import useAxios from "../../utils/hooks/useAxios";

const Dashboard = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const kinshipOptions = useSelector((state) => state.kinship.options);
  const classes = useStyles();
  console.log(kinshipOptions);
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Professor",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          let color = "primary";
          if (value === "Encerrada") {
            color = "error";
          } else if (value === "Férias") {
            color = "secondary";
          }
          return (
            <>
              <Badge color={color} variant="dot" badgeContent="" />{" "}
              <span style={{ marginLeft: 5 }}>{value}</span>
            </>
          );
        },
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const dataTable = [
    { name: "Ceramica", company: "Pedro", status: "Ativa", state: "NY" },
    { name: "Futebol", company: "Fernanda", status: "Férias", state: "CT" },
    {
      name: "Capoeira",
      company: "Joel do Borel",
      status: "Férias",
      state: "FL",
    },
    { name: "Balé", company: "Jonh Wick", status: "Encerrada", state: "TX" },
  ];

  const dataBar = [
    {
      name: "Natação",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Voley",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Futebol",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Capoeira",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    dispatch(setKinship(api));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xl={10} lg={10}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Grid container justify="space-between" alignItems="center">
                <Typography
                  style={{ marginLeft: 20, fontWeight: "bold", fontSize: 14 }}
                >
                  Alunos Novos
                </Typography>
                <IconButton>
                  <RotateRightIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div style={{ width: "100%", height: 450 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={dataBar}
                    margin={{
                      top: 15,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="pv"
                      fill="#8884d8"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <Divider />
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xl={2} lg={2}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container justify="space-between" alignItems="center">
                <Typography
                  style={{ marginLeft: 20, fontWeight: "bold", fontSize: 14 }}
                >
                  Média de idade dos alunos
                </Typography>
                <IconButton>
                  <RotateRightIcon />
                </IconButton>
              </Grid>
              <Divider />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <PieChart onMouseEnter={() => {}}>
                    <Pie
                      data={data}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={1}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <Divider />
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xl={2} lg={2}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container justify="space-between" alignItems="center">
                <Typography
                  style={{ marginLeft: 20, fontWeight: "bold", fontSize: 14 }}
                >
                  Relatórios
                </Typography>
                <IconButton>
                  <RotateRightIcon />
                </IconButton>
              </Grid>
              <Divider />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={4} lg={4}>
                  <img src={Icon1} style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xl={8} lg={8}>
                  <Typography style={{ fontSize: 13, fontWeight: "bold" }}>
                    Média de Idades
                  </Typography>
                  <Typography style={{ cursor: "pointer", fontSize: 12 }}>
                    Exportar Lista
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={4} lg={4}>
                  <img src={Icon2} style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xl={8} lg={8}>
                  <Typography style={{ fontSize: 13, fontWeight: "bold" }}>
                    Média SocioEco
                  </Typography>
                  <Typography style={{ cursor: "pointer", fontSize: 12 }}>
                    Exportar Lista
                  </Typography>
                </Grid>
              </Grid>

              <Divider />
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={4} lg={4}>
                  <img src={Icon3} style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xl={8} lg={8}>
                  <Typography
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >{`Relação Menino x Menina`}</Typography>
                  <Typography style={{ cursor: "pointer", fontSize: 12 }}>
                    Exportar Lista
                  </Typography>
                </Grid>
              </Grid>

              <Divider />
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={4} lg={4}>
                  <img src={Icon4} style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xl={8} lg={8}>
                  <Typography style={{ fontSize: 13, fontWeight: "bold" }}>
                    Evasão
                  </Typography>
                  <Typography style={{ cursor: "pointer", fontSize: 12 }}>
                    Exportar Lista
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xl={10} lg={10} md={12} sm={12} xs={12}>
        <MUIDataTable title="Oficinas" data={dataTable} columns={columns} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
