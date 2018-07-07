module.exports = {
    webpack: (config, { dev }) => {
      // Perform customizations to config
      config = Object.assign(
        config,
        {
          target: "node"
        }
      )
  
      // Important: return the modified config
      return config
    }
  }