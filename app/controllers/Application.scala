package controllers
import play.api.Play
import play.api._
import play.api.mvc._

class Application extends Controller {
  /**
    * Get the server url from the controller and pass it to the hidden input. Not the best way, but fast
    * TODO: refactor it
    * @return
    */
  def index = Action {
    val serverUrl = Play.current.configuration.getString("server.url").getOrElse("")
    Ok(views.html.index("Your new application is ready.", serverUrl))
  }

}
