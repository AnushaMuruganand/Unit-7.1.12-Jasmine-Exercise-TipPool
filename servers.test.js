describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
        serverNameInput.value = 'Alice';
        //console.log(serverNameInput.value);
    });
  
  it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    
    expect(allServers['server' + serverId].serverName).toBeInstanceOf(String);
  });
  
  it('saves long server names to allServers on submitServerInfo()', function () {
    serverNameInput.value = "Alice is in wonderland";
    submitServerInfo();
    expect(Object.keys(allServers).length).toBe(1);

  });

  it('should not add a new server on submitServerInfo() with empty  input', function () {
      serverNameInput.value = '';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTableList = document.querySelectorAll('#serverTable tbody td');

    expect(curTableList.length).toEqual(2);
    expect(curTableList[0].innerText).toEqual('Alice');
    expect(curTableList[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

  
  