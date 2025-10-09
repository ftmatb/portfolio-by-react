import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Front-End Developer and Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With experience in customer service, administration, and
              translation, I've developed strong communication and
              problem-solving skills. Recently, I've focused on web development,
              learning to build responsive and user-friendly websites using
              HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating clean, functional designs and always
              eager to learn new technologies. My goal is to grow as a front-end
              developer and build digital experiences that connect people and
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 jsutify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Downlaod CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-">Web Development</h4>
                  <p className="text-muted-foreground">
                    Skilled in HTML, CSS, JavaScript, and React to create
                    responsive and user-friendly websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-"> Soft Skills </h4>
                  <p className="text-muted-foreground">
                    Strong communication, problem-solving, and teamwork skills
                    from diverse professional experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-">  </h4>
                  <p className="text-muted-foreground">
                    Experience in customer service, administration, and
                    translation, showcasing adaptability and a strong work ethic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
