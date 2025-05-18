import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Code, Server, Users, Copy, Gamepad2, Bot } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.3)" }}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4 text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

const App = () => {
  const { toast } = useToast();

  const handleDiscordLink = () => {
    window.open("https://discord.gg/s6ChdFMXan", "_blank");
    toast({
      title: "Redirigiendo a Discord",
      description: "¡Únete a nuestra comunidad en Discord!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <header className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img  
              alt="JonhScripts Logo" 
              className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg border-2 border-purple-500"
             src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JonhScripts
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Soluciones expertas en scripting, Discord y desarrollo para MTA SA.
          </motion.p>
        </header>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10 text-purple-400">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              icon={<Code size={24} />}
              title="Scripts .lua para MTA SA"
              description="Desarrollo de scripts personalizados en Lua para servidores de Multi Theft Auto: San Andreas. Optimizados y seguros."
              delay={0.3}
            />
            <ServiceCard 
              icon={<Bot size={24} />}
              title="Creador de Discord"
              description="Diseño y configuración profesional de servidores de Discord, roles, canales, bots y permisos."
              delay={0.4}
            />
            <ServiceCard 
              icon={<Copy size={24} />}
              title="Clonación de Servidores Discord"
              description="Servicio de clonación de la estructura y configuración de servidores de Discord (sin mensajes ni miembros)."
              delay={0.5}
            />
            <ServiceCard 
              icon={<Gamepad2 size={24} />}
              title="Studio Jonh"
              description="Proyectos de desarrollo más amplios y personalizados bajo la marca Studio Jonh. Consulta tus ideas."
              delay={0.6}
            />
             <ServiceCard 
              icon={<Server size={24} />}
              title="Optimización de Servidores"
              description="Mejora del rendimiento y la estabilidad de tus servidores de MTA SA y Discord."
              delay={0.7}
            />
             <ServiceCard 
              icon={<Users size={24} />}
              title="Soporte Comunitario"
              description="Asistencia y soporte técnico para todos nuestros clientes y miembros de la comunidad."
              delay={0.8}
            />
          </div>
        </section>
        
        <motion.section 
          className="text-center bg-gray-800/60 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl border border-purple-500/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-300">Únete a Nuestra Comunidad</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Conéctate con nosotros, obtén soporte, comparte ideas y mantente al día con las últimas novedades en nuestro servidor de Discord.
          </p>
          <Button 
            onClick={handleDiscordLink}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <Users className="mr-2 h-5 w-5" /> Ir a Discord
          </Button>
        </motion.section>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} JonhScripts. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado con <span className="text-purple-400">❤</span> por Studio Jonh</p>
        </footer>
      </div>
      <Toaster />
    </div>
  );
};

export default App;