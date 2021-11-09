import { connect } from "react-redux";
import { fetchWines } from "../../actions/wine_actions"
import Home from "./home";

const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = ({}) => ({
    fetchWines: (filters) => dispatch(fetchWines(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);