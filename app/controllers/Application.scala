package controllers
import play.api.Play
import play.api._
import play.api.mvc._
class Application extends Controller {

  def index = Action {
    val consumerUrl = Play.current.configuration.getString("consumer.url").getOrElse("")
    val producerUrl = Play.current.configuration.getString("producer.url").getOrElse("")
    Ok(views.html.index("Your new application is ready.", producerUrl, consumerUrl))
  }

}
