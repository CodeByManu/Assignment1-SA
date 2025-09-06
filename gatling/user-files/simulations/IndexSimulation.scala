import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class IndexSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://haproxy:80") 
    .header("Host", "app.localhost")
    .acceptHeader("text/html")

  // Escenarios separados para cada carga
  val scn1 = scenario("Basic Test 1 req/s")
    .exec(
      http("GET home 1 req/s")
        .get("/")
        .check(status.is(200))
    )

  val scn10 = scenario("Basic Test 10 req/s")
    .exec(
      http("GET home 10 req/s")
        .get("/")
        .check(status.is(200))
    )

  val scn100 = scenario("Basic Test 100 req/s")
    .exec(
      http("GET home 100 req/s")
        .get("/")
        .check(status.is(200))
    )

  val scn250 = scenario("Basic Test 250 req/s")
    .exec(
      http("GET home 250 req/s")
        .get("/")
        .check(status.is(200))
    )

  val scn500 = scenario("Basic Test 500 req/s")
    .exec(
      http("GET home 500 req/s")
        .get("/")
        .check(status.is(200))
    )

  // SetUp con inyecciones de carga
  setUp(
    scn500.inject(constantUsersPerSec(500).during(5.minutes)).protocols(httpProtocol),
  )
}
