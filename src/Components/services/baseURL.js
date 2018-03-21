const TestingZone = () => {
    var isLocalhost = Boolean(
        window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    var isQA = Boolean(
        window.location.href.match("source-qa") ||
        window.location.href.match("qa.")
    );
    return {
        isLocalhost: isLocalhost,
        isQA: isQA
    };
}
const switchURLapi = (LocalHost, QADomain, PRODDomain) => {
    if(TestingZone().isLocalhost) {
        return LocalHost;
    } else{
        if(TestingZone().isQA)    {
            return QADomain;
        } else{
            return PRODDomain;
        }
    }
}

export {
    TestingZone,
    switchURLapi
}