exports.seed = function(knex, Promise) {
  return knex('classes').insert([
    { 
      name: 'Pilates on the patio!', 
      instructor_username: 'yoked', 
      type: 'pilates', 
      start_time: '6am Friday', 
      duration: '45 mins', 
      intensity: 'intermediate', 
      location: '123 Jones St', 
      class_size: 20 
    },
    { 
      name: 'Pumping iron at the beach!', 
      instructor_username: 'yoked', 
      type: 'weightlifting', 
      start_time: '10am Thursday', 
      duration: '45 mins', 
      intensity: 'beginner', 
      location: '456 Smith Ave', 
      class_size: 15 }
  ]);
};
