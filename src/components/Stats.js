import useStats from "../hooks/useStats";

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (error) return <h1>error !!</h1>;
  if (loading) return <h1>Loading ...</h1>;

  return (
    <section>
      <div className="confirmed-card">
        <h2 className="title">CONFIRMED CASES </h2>
        <h2>{stats.confirmed.value}</h2>
      </div>
      <div className="recovered-card">
        <h2 className="title">RECOVERED CASES </h2>
        <h2>{stats.recovered.value}</h2>
      </div>
      <div className="death-card">
        <h2 className="title">DEATH CASES </h2>
        <h2>{stats.deaths.value}</h2>
      </div>
    </section>
  );
};

export default Stats;
