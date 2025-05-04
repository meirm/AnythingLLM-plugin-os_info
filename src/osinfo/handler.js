// OS Info Plugin for AnythingLLM
// This plugin retrieves basic operating system information: OS type, total RAM, and CPU details.
// Uses Node.js built-in 'os' module for cross-platform compatibility.

module.exports.runtime = {
  /**
   * Handler function to get OS, RAM, and CPU info.
   * @returns {Promise<string>} JSON string with system information.
   */
  handler: async function () {
    const callerId = `${this.config.name}-v${this.config.version}`;
    try {
      this.introspect(`${callerId} called to get OS, RAM, and CPU info`);

      // Import Node.js os module
      const os = require('os');

      // Get OS type (e.g., Linux, Darwin, Windows_NT)
      const osType = os.type();
      // Get OS platform (e.g., linux, darwin, win32)
      const osPlatform = os.platform();
      // Get OS release (e.g., version number)
      const osRelease = os.release();

      // Get total system memory in GB, rounded to 2 decimals
      const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);

      // Get CPU info: model and number of cores
      const cpus = os.cpus();
      const cpuModel = cpus[0] ? cpus[0].model : 'Unknown';
      const cpuCount = cpus.length;

      // Build result object
      const result = {
        os: `${osType} (${osPlatform}) ${osRelease}`,
        ram: `${totalMemGB} GB`,
        cpu: {
          model: cpuModel,
          cores: cpuCount
        }
      };

      // Return as JSON string
      return JSON.stringify(result, null, 2);
    } catch (e) {
      // Log and introspect errors for easier debugging
      this.introspect(`${callerId} failed to get OS info. Reason: ${e.message}`);
      this.logger(`${callerId} failed to get OS info`, e.message);
      return `Failed to get OS information. Error: ${e.message}`;
    }
  }
}; 