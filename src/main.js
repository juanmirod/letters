var Colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'];
//var Words = ['cuando', 'sólo', 'vamos', 'cómo', 'estás', 'o', 'soy', 'puedo', 'esto', 'quiero', 'aquí', 'tiene', 'tú', 'ahora', 'algo', 'fue', 'son', 'ser', 'he', 'era', 'eres', 'así', 'sé', 'tienes', 'ese', 'bueno', 'creo', 'todos', 'sus', 'puede', 'voy', 'tan', 'esa', 'porque', 'dónde', 'hacer', 'quién', 'nunca', 'nada', 'él', 'estaba', 'están', 'quieres', 'va', 'sabes', 'vez', 'hace', 'ella', 'dos', 'tenemos', 'puedes', 'sin', 'hasta', 'sr', 'oh', 'entonces', 'dios', 'sobre', 'usted', 'ni', 'has', 'mis', 'mejor', 'mucho', 'gracias', 'ver', 'hola', 'solo', 'estar', 'les', 'estamos', 'siento', 'alguien', 'otra', 'siempre', 'hombre', 'uno', 'donde', 'quiere', 'parece', 'antes', 'ir', 'mira', 'vas', 'tal', 'tus', 'decir', 'han', 'ahí', 'poco', 'estas', 'nadie', 'desde', 'sea', 'también', 'tiempo', 'gran', 'dijo', 'favor', 'podemos', 'casa', 'gente', 'cosas', 'otro', 'día', 'buen', 'podría', 'debe', 'necesito', 'había', 'después', 'será', 'hecho', 'señor', 'nuestro', 'vida', 'tener', 'sabe', 'quien', 'tenía', 'hablar', 'buena', 'ellos', 'dije', 'toda', 'tipo', 'fuera', 'estado', 'crees', 'ven', 'sido', 'todas', 'tienen', 'menos', 'dice', 'haber', 'tres', 'cada', 'padre', 'años', 'hijo', 'nosotros', 'claro', 'aún', 'seguro', 'nuestra', 'gusta', 'espera', 've', 'trabajo', 'lugar', 'verdad', 'pasa', 'debo', 'alguna', 'quería', 'unos', 'esos', 'luego', 'mas', 'oye', 'quizá', 'van', 'mí', 'hemos', 'ti', 'estos', 'mismo', 'algún', 'pueden', 'noche', 'mundo', 'visto', 'cosa', 'nombre', 'realmente', 'entre', 'buenas', 'ah', 'somos', 'veo', 'hizo', 'esas', 'parte', 'pues', 'saber', 'haciendo', 'debes', 'muchas', 'casi', 'amigo', 'hora', 'quizás', 'dinero', 'hacia', 'haces', 'demasiado', 'ud', 'pensé', 'madre', 'deja', 'hoy', 'veces', 'debería', 'contra', 'primera', 'mientras', 'cualquier', 'nuevo', 'todavía', 'debemos', 'ustedes', 'mal', 'hombres', 'tanto', 'salir', 'digo', 'mujer', 'nueva', 'momento', 'sería', 'papá', 'ves', 'da', 'hey', 'importa', 'cuánto', 'días', 'cuál', 'espero', 'mañana', 'dame', 'vaya', 'iba', 'mamá', 'vi', 'déjame', 'sabía', 'ningún', 'buenos', 'dr', 'durante', 'mierda', 'forma', 'allí', 'hice', 'único', 'sigue', 'bajo', 'poder', 'acuerdo', 'volver', 'nuestros', 'haya', 'supongo', 'toma', 'siquiera', 'quieren', 'chica', 'dejar', 'aunque', 'unas', 'idea', 'ay', 'dicho', 'necesitamos', 'viene', 'allá', 'ninguna', 'significa', 'hubiera', 'algunos', 'tomar', 'sra', 'dentro', 'primer', 'llama', 'gustaría', 'e', 'dijiste', 'diablos', 'fin', 'pasó', 'maldita', 'deberías', 'muchos', 'cree', 'habla', 'fui', 'necesita', 'policía', 'última', 'vete', 'lado', 'maldito', 'otros', 'razón', 'primero', 'cuenta', 'amor', 'justo', 'chico', 'llegar', 'cuándo', 'dime', 'ok', 'cinco', 'dar', 'algunas', 'vale', 'haré', 'problema', 'tuve', 'dicen', 'pasar', 'mío', 'familia', 'viejo', 'hago', 'escucha', 'pueda', 'esté', 'año', 'pasado', 'cuidado', 'podía', 'hacerlo', 'eran', 'personas', 'tarde', 'saben', 'caso', 'adónde', 'venga', 'fueron', 'cuanto', 'cerca', 'pequeño', 'estuvo', 'necesitas', 'hiciste', 'manos', 'estabas', 'encontrar', 'queda', 'chicos', 'estará', 'historia', 'número', 'suerte', 'cual', 'feliz', 'pronto', 'amigos', 'eh', 'par', 'igual', 'venir', 'cuatro', 'clase', 'trata', 'iré', 'capitán', 'cierto', 'hablando', 'srta', 'hagas', 'hermano', 'dices', 'éste', 'manera', 'hacen', 'puerta', 'os', 'bastante', 'ciudad', 'matar', 'esposa', 'nuestras', 'única', 'aqui', 'camino', 'cabeza', 'tenido', 'podrías', 'dio', 'tenga', 'conozco', 'niños', 'mucha', 'di', 'creer', 'niño', 'cariño', 'vino', 'jefe', 'miedo', 'medio', 'equipo', 'habrá', 'entrar', 'deben', 'muerte', 'acerca', 'último', 'punto', 'vivir', 'haga', 'misma', 'realidad', 'lleva', 'guerra', 'persona', 'pienso', 'sangre', 'conmigo', 'dile', 'rápido', 'seguir', 'pensar', 'seis', 'además', 'listo', 'adiós', 'entiendo', 'ojos', 'minutos', 'mayor', 'semana', 'agua', 'sabemos', 'mano', 'hija', 'habría', 'haz', 'ayuda', 'tío', 'doctor', 'auto', 'diré', 'asi', 'ésta', 'jamás', 'incluso', 'difícil', 'noches', 'contigo', 'estaban', 'paso', 'tuvo', 'estaré', 'horas', 'juego', 'problemas', 'piensa', 'cuerpo', 'quisiera', 'queremos', 'llamo', 'demonios', 'señora', 'agente', 'grande', 'comida', 'buscar', 'digas', 'muerto', 'mil', 'cara', 'falta', 'estuve'];
var Words = ['sofía', 'mamá', 'papá', 'noa'];

var Letters = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

App.init(Colors, Words, Letters);