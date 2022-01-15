const cds = require("@sap/cds");

//here is the service implementation
//here are the service handlers
module.exports = cds.service.impl(async function () {

//************************************************************************************************* */
// Uncomment this section ONLY when you want to use file ".env" for storing the following phrase
// cds.requires.API_BUSINESS_PARTNER.[sandbox].credentials.headers.APIKey=VspEY5ERqczq7OmdeLzzpQ55nGPIL46w
// N.B. This is not recommended
//************************************************************************************************* */
/*
    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');
    this.on('READ', 'BusinessPartners', async req => {
        return bupa.run(req.query);
    });
    this.on('READ', 'BusinessPartnerAdresses', async req => {
        return bupa.run(req.query);
    });
*/
//************************************************************************************************* */
// Uncomment this section ONLY when you want to use file ".env" for storing the following phrase
// APIKey=VspEY5ERqczq7OmdeLzzpQ55nGPIL46w
// N.B. This is the best option for when you want to push to cloud foundry but there is a problem 
//      with   
// N.B. - You push the APIKEy using the following command
//            cf set-env risk-management-srv APIKey VspEY5ERqczq7OmdeLzzpQ55nGPIL46w
//      - You can check things using the following command
//            cf env risk-management-srv
//      - If you make changes, you MUST restart the service
//            cf restart risk-management-srv
//************************************************************************************************* */
const BPsrv = await cds.connect.to("API_BUSINESS_PARTNER");

  this.on("READ", "BusinessPartners", async (req) => {
    req.query.where(" LastName <> '' and FirstName <> '' ");

    return await BPsrv.transaction(req).send({
      query: req.query,
      headers: {
        APIKey: process.env.APIKey,
      },
    });
  });

  this.on("READ", "BusinessPartnerAddresses", async (req) => {
    req.query.where(" Country <> '' ");

    return await BPsrv.transaction(req).send({
      query: req.query,
      headers: {
        APIKey: process.env.APIKey,
      },
    });
  });



});
