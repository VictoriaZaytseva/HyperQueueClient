name := "play-scala"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "org.webjars" % "jquery" % "2.1.4"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

/**
  * <groupId>org.webjars</groupId>
    <artifactId>jquery</artifactId>
    <version>2.1.4</version>
  */
// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator
