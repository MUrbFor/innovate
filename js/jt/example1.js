var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (20 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
    id: "1",
    name: "Getting to Net Zero",
    data: {
       hierarchy: "source",
       band: "",
       color:"grey"
       },
    children: [{
        id: "1.1",
        name: "Reducing direct emissions: emissions from sources within a place",
        data: {
           hierarchy: "strategic",
           band: "",
           color: "#53B8D3"
           },
        children: [
                {
                id: "1.1.1",
                name: "Reducing emissions from transport",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#78C7DD"
                   },
                children: [
                        {
                        id: "1.1.1.1",
                        name: "Encouraging people to cycle and walk",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.1.1",
                            name: "Built environment solutions for pedestrians and cycling ",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.1.2",
                            name: "Bike-sharing schemes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.1.3",
                            name: "Cycle to work schemes (procured by councils for their staff)",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.1.4",
                            name: "Behaviour change to encourage active travel",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.2",
                        name: "Encouraging people to use public and low-carbon transport",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.2.1",
                            name: "Mobility as a service",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.2.2",
                            name: "Journey planning apps",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.2.3",
                            name: "Integrated ticketing and smarter travel",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.2.4",
                            name: "Micromobility schemes",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.2.5",
                            name: "New mass transit systems",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.2.6",
                            name: "Bike retrofitting",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.3",
                        name: "Reducing emissions from cars and taxis (owned by citizens and businesses)",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.3.1",
                            name: "EV charging infrastructure",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.2",
                            name: "EV charging systems",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.3",
                            name: "Traffic management systems",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.4",
                            name: "Smart and emissions-based parking",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.5",
                            name: "Charges: congestion charges and LEZs",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.6",
                            name: "Taxi-leasing models for councils",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.3.7",
                            name: "Connected and autonomous vehicles",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.4",
                        name: "Reducing emissions from public-sector fleets",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.4.1",
                            name: "EV cars (purchase or lease by councils and public sector) ",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.4.2",
                            name: "EV municipal vehicles – gritters, bin lorries, etc",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.4.3",
                            name: "Alternative fuel vehicles: hydrogen, biogas, hybrid (purchase or lease by councils and public sector)",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.4.4",
                            name: "Replacing public-sector cars with e-bikes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.4.5",
                            name: "Cross public-sector car clubs",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.4.6",
                            name: "Smart driving tools",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.5",
                        name: "Reducing emissions from public transport",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.5.1",
                            name: "EV bus fleets",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.5.2",
                            name: "Other sustainable fuels in buses: LPG, biogas, hybrid, hydrogen, methanol",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.5.3",
                            name: "Bus and rail retrofitting solutions",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.5.4",
                            name: "Low-emission rail",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.6",
                        name: "Travel substitution",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.6.1",
                            name: "Remote and virtual working",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.7",
                        name: "Reducing aviation emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.7.1",
                            name: "Drone substitution for public aviation services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.7.2",
                            name: "Electric air taxi services using eVOTL technology",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.7.3",
                            name: "Alternatives to fuel engines and aviation gasoline",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.8",
                        name: "Reducing maritime emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.8.1",
                            name: "Maritime EV and sustainable fuel ferries",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.8.2",
                            name: "Autonomous ships",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.1.9",
                        name: "Reducing freight and logistics emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.1.9.1",
                            name: "Drone-based distribution services",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.9.2",
                            name: "EV freight and logistics cars, LGVS and HGVS",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.9.3",
                            name: "Alternative fuel cars, LGVs, HGVS and bikes",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.1.9.4",
                            name: "Autonomous delivery vehicles",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        }
                    ]
                },
                {
                id: "1.1.2",
                name: "Reducing emissions from buildings",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#78C7DD"
                   },
                children: [
                        {
                        id: "1.1.2.1",
                        name: "Improve energy efficiency of private housing and social housing",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.2.1.1",
                            name: "Domestic sector retrofit programmes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.2",
                            name: "Gas boiler replacement",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.3",
                            name: "Building inspections to enforce minimum standards of energy efficiency",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.4",
                            name: "Appliance upgrade programmes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.5",
                            name: "Installing double/triple glazing",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.6",
                            name: "IoT technology for energy use monitoring and control",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.7",
                            name: "Enable heat transfer from industrial sites to domestic",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.8",
                            name: "Accrediting landlords for standards",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.9",
                            name: "Installing reactive glazing",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.10",
                            name: "Design and build ultra-low energy buildings",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.11",
                            name: "Green roofing and walls",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.1.12",
                            name: "Heating-as-a-Service",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.2.2",
                        name: "Reducing emissions from public buildings",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.2.2.1",
                            name: "Design and build ultra-low energy buildings",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.2.2",
                            name: "Public sector retrofit and certification programmes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.2.3",
                            name: "Redesigning public services for building efficiency (such as hospital layouts)",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.2.4",
                            name: "IoT technology for energy use monitoring and control",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.2.5",
                            name: "Digital Twin and intelligent monitoring of whole building or built environment",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.2.3",
                        name: "Reducing emissions from offices",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.2.3.1",
                            name: "Carbon audit services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.3.2",
                            name: "Office retrofit programmes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.3.3",
                            name: "Service redesign for efficiency in building use (including remote working, occupancy monitoring, hot desking)",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.3.4",
                            name: "Sustainable data centres",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.2.3.5",
                            name: "Heat capture from computer warming",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.1.3",
                name: "Reducing emissions from industry",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#78C7DD"
                   },
                children: [
                        {
                        id: "1.1.3.1",
                        name: "Reducing emissions from factories, manufacturing and commercial premises",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.3.1.1",
                            name: "Alternatives to high-emissions chemical processes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.3.1.2",
                            name: "Clustering of industrial sites",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.3.1.3",
                            name: "Reduce water use and treatment for industrial processes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.3.1.4",
                            name: "Waste heat recovery",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },  
                        {
                        id: "1.1.3.2",
                        name: "Reducing fugitive emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.3.2.1",
                            name: "Inspection and accreditation services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.3.2.2",
                            name: "Leak detection, including optical gas imaging and differential absorption lidar. ",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        }        
                  ]
                },
                {
                id: "1.1.4",
                name: "Reducing emissions from waste",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#78C7DD"
                   },
                children: [
                        {
                        id: "1.1.4.1",
                        name: "Reducing domestic and industrial waste",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.4.1.1",
                            name: "Replacing unsustainable packaging and disposable goods with easily recyclable materials",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.1.2",
                            name: "Refurbish/reuse, product-service models, and circular economy models",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.1.3",
                            name: "Using less packaging",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.1.4",
                            name: "Behaviour change campaigns to reduce wasteful consumption",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.1.5",
                            name: "Behaviour change campaigns to reduce wasteful consumption",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.4.2",
                        name: "Reducing Emissions from Waste Management",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.4.2.1",
                            name: "New processes which make waste recyclable",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.2",
                            name: "Autoclave sterilisation of domestic and commercial waste for increased recyclability",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.3",
                            name: "Smart bin technology",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.4",
                            name: "Bin lorry route optimisation",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.5",
                            name: "Near Infra-Red Spectroscopy for differentiating plastic polymers in recycling",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.6",
                            name: "Novel techniques in waste sorting",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.4.2.7",
                            name: "Traditional waste management",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.1.5",
                name: "Reducing emissions directly produced from public space, land and agriculture",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#78C7DD"
                   },
                children: [
                        {
                        id: "1.1.5.1",
                        name: "Reducing emissions from infrastructure and public realm",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.5.1.1",
                            name: "LED street lighting",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.5.1.2",
                            name: "Intelligent street lighting",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.5.1.3",
                            name: "Smart public realm monitoring",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.1.5.2",
                        name: "Reducing agricultural emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9ED7E6"
                           },
                        children: [
                            {
                            id: "1.1.5.2.1",
                            name: "Changing practices on county farms to reduce emissions",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            },
                            {
                            id: "1.1.5.2.2",
                            name: "Support for farmers to change practices to reduce emissions",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3E6F0"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                }
            ]
        },
        {
        id: "1.2",
        name: "Emissions from energy: emissions caused by energy production required by activity within a place",
        data: {
           hierarchy: "strategic",
           band: "",
           color: "#DD528B"
           },
        children: [
                {
                id: "1.2.1",
                name: "Increasing renewables and low-carbon energy generation",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#E478A4"
                   },
                children: [
                        {
                        id: "1.2.1.1",
                        name: "Increasing renewable heat supply",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.1.1.1",
                            name: "Installing hydrogen boilers",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.1.2",
                            name: "Increasing hydrogen in gas supply",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.1.3",
                            name: "Replacing gas with hydrogen in energy-intensive industry",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.1.4",
                            name: "Domestic and commercial heat pump installation",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.1.5",
                            name: "Novel heating technology",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.1.5",
                            name: "Solar Thermal",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.2",
                        name: "Increasing energy from biomass and waste",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                      {
                            id: "1.2.1.2.1",
                            name: "Domestic and commercial biomass schemes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.2.2",
                            name: "Turning waste into biofuel",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.3",
                        name: "Increasing energy from solar",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                {
                            id: "1.2.1.3.1",
                            name: "Installing PV cells on buildings",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.3.2",
                            name: "Creating solar farms",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.3.3",
                            name: "Novel solar, including nighttime photovoltaics and flexible solar films",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.4",
                        name: "Increasing energy generation from kinetic processes",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.1.4.1",
                            name: "Personal movement electricity generation",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.4.2",
                            name: "Kinetic tiles and surfaces",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.5",
                        name: "Increasing energy from geothermic sources",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.1.5.1",
                            name: "Minewater energy",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.5.2",
                            name: "Deep geothermal energy",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.5.3",
                            name: "Shallow geothermal energy",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.5.4",
                            name: "Novel geothermal",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.6",
                        name: "Increasing energy from wind, wave and natural renewables",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.1.6.1",
                            name: "Onshore wind",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.6.2",
                            name: "Offshore wind",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.6.3",
                            name: "Tidal power",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.6.4",
                            name: "Hydroelectric",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.6.5",
                            name: "Novel natural renewables",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.1.7",
                        name: "Combining energy generation for buildings",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.1.7.1",
                            name: "District and community heat networks",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.1.7.2",
                            name: "Domestic and commercial CHP schemes",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.2.2",
                name: "Changing behaviour in energy consumption",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#E478A4"
                   },
                children: [
                        {
                        id: "1.2.2.1",
                        name: "Helping consumers increase market power",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.2.1.1",
                            name: "Group buying services",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.2.2",
                        name: "Encouraging consumers to reduce energy use",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.2.2.1",
                            name: "Smart metering",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.2.2.2",
                            name: "Behaviour change campaigns",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.2.2.3",
                            name: "Information and advice to residents and businesses",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.2.3",
                name: "Increasing capacity, resilience and intelligence of energy systems",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#E478A4"
                   },
                children: [
                        {
                        id: "1.2.3.1",
                        name: "Finding new forms of funding for renewables",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.3.1.1",
                            name: "Community-owned energy",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.1.2",
                            name: "Public owned energy suppliers",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.3.2",
                        name: "Increasing energy storage to enable renewables",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.3.2.1",
                            name: "Battery storage",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.2.2",
                            name: "Fuel cells",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.2.3",
                            name: "Mechanical Storage",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.2.4",
                            name: "Thermal storage",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.2.3.3",
                        name: "Managing energy to enable renewables and improving efficiency",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#EC9DBE"
                           },
                        children: [
                            {
                            id: "1.2.3.3.1",
                            name: "Smart grids",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.3.2",
                            name: "Flexible demand services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            },
                            {
                            id: "1.2.3.3.3",
                            name: "Time of use services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#F3C3D7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                }
            ]
        },
        {
        id: "1.3",
        name: "Indirect emissions: emissions caused by activity within a place, but which are emitted elsewhere",
        data: {
           hierarchy: "strategic",
           band: "",
           color: "#FFC55F"
           },
        children: [
                {
                id: "1.3.1",
                name: "Reducing emissions from food",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#FFD282"
                   },
                children: [
                        {
                        id: "1.3.1.1",
                        name: "Reducing emissions caused by transporting food",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.1.1.1",
                            name: "Localising supply chains to reduce food miles",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.1.2",
                            name: "Land for community growing",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.1.3",
                            name: "Urban farming/Vertical Farming",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.1.4",
                            name: "Behaviour change campaigns to encourage local buying",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.3.1.2",
                        name: "Switching to sustainable products",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.1.2.1",
                            name: "Low carbon contract caterers",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.2.2",
                            name: "Switching wholesale food purchase away from meat and dairy",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.2.3",
                            name: "Voluntary food labelling to indicate carbon costs",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.2.4",
                            name: "Behaviour change campaigns to raise awareness of the carbon costs of food",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.3.1.3",
                        name: "Reducing emissions caused by wasting food",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.1.3.1",
                            name: "Food and drink ERP software",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.1.3.2",
                            name: "Food waste disposal services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.3.2",
                name: "Reducing emissions from consumer goods",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#FFD282"
                   },
                children: [
                        {
                        id: "1.3.2.1",
                        name: "Switching to circular economy products",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.2.1.1",
                            name: "Accreditation schemes for circular economy products",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.2.1.2",
                            name: "Second-hand goods market regulation to give consumer confidence",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.3.2.2",
                        name: "Reducing emissions from transport of consumer goods",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.2.2.1",
                            name: "3D printing & additive manufacturing",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.2.2.2",
                            name: "Distribution of business districts and shops (5 minute city model) through licencing",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.2.2.3",
                            name: "Localising supply chains to reduce emissions",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.3.2.3",
                        name: "Reducing consumption of consumer goods",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.2.3.1",
                            name: "Behaviour change campaigns (awareness raising and incentivising)",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.3.3",
                name: "Reducing emissions from online services",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#FFD282"
                   },
                children: [
                        {
                        id: "1.3.3.1",
                        name: "Reducing emissions from data centres",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.3.3.1",
                            name: "Sustainable data centres",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.3.3.2",
                            name: "Reducing data-intensive processes",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.3.4",
                name: "Reducing emissions from construction",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#FFD282"
                   },
                children: [
                        {
                        id: "1.3.4.1",
                        name: "Increasing use of sustainable construction materials",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.4.1.1",
                            name: "Lower-carbon concrete",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.1.2",
                            name: "Lower-carbon steel",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.1.3",
                            name: "Timber construction (frames)",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.1.4",
                            name: "Cross-Laminated Timber",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.1.5",
                            name: "Other natural building materials including straw bales, grasscrete, rammed earth, hempcrete, and bamboo",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.1.6",
                            name: "Use of reclaimed/refurbished materials",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.3.4.2",
                        name: "Reducing waste in construction",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#FFDEA4"
                           },
                        children: [
                            {
                            id: "1.3.4.2.1",
                            name: "Modular construction",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.2.2",
                            name: "Automation of on-site processes",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.2.3",
                            name: "3D printing & additive manufacturing",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.2.4",
                            name: "Design for manufacture and assembly (DfMA)",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.2.5",
                            name: "BIM & Digital Planning",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            },
                            {
                            id: "1.3.4.2.6",
                            name: "Construction ERP software (Enterprise Resource Planning)",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#FFEBC7"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                }
            ]
        },
        {
        id: "1.4",
        name: "Capturing and offsetting emissions",
        data: {
           hierarchy: "strategic",
           band: "",
           color: "#9A73EF"
           },
        children: [
                {
                id: "1.4.1",
                name: "Increasing carbon capture efficiency of existing natural land, woods, and waterways",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#B091F3"
                   },
                children: [
                        {
                        id: "1.4.1.1",
                        name: "Increasing carbon capture in land, parks and woodland",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                            {
                            id: "1.4.1.1.1",
                            name: "Peatland restoration",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.1.2",
                            name: "Peatland protection monitoring",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.1.3",
                            name: "Sustainable land management services",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.1.4",
                            name: "Woodland management solutions",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.1.5",
                            name: "Natural capital business modelling",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.1.6",
                            name: "Carbon negative woodlands for biomass",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.4.1.2",
                        name: "Increasing carbon capture in waterways and rivers",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                {
                            id: "1.4.1.2.1",
                            name: "Wetland creation schemes along existing waterways",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.2.2",
                            name: "Constructed wetland treatment systems",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.2.3",
                            name: "Natural floodplain management systems",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.2.4",
                            name: "Sustainable urban drainage systems",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.1.2.5",
                            name: "Digital twinning in water treatment",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.4.2",
                name: "Creating new carbon capture natural assets",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#B091F3"
                   },
                children: [
                        {
                        id: "1.4.2.1",
                        name: "Increasing tree and green cover",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                            {
                            id: "1.4.2.1.1",
                            name: "New tree planting and green infrastructure",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.2.1.2",
                            name: "Natural regeneration management ",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.2.1.3",
                            name: "Green roofing",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.4.2.2",
                        name: "Creating new water-based carbon capture",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                            {
                            id: "1.4.2.2.1",
                            name: "New wetlands, rivers and canals",
                            data: {
                               hierarchy: "solution",
                               band: "Adapting",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                        ]
                        }
                  ]
                },
                {
                id: "1.4.3",
                name: "Carbon capture and storage through technology",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#B091F3"
                   },
                children: [
                        {
                        id: "1.4.3.1",
                        name: "Capturing carbon",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                {
                            id: "1.4.3.1.1",
                            name: "Source capture technology",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.3.1.2",
                            name: "Direct air capture technology",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.4.3.2",
                        name: "Storing and using carbon",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                            {
                            id: "1.4.3.2.1",
                            name: "Geostorage",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.3.2.2",
                            name: "Solid state storage",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.3.2.3",
                            name: "Mineral storage",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.4.4",
                name: "Funding carbon offsetting elsewhere",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#B091F3"
                   },
                children: [
                       {
                        id: "1.4.4.1",
                        name: "Asset creation schemes in other places",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#C6B0F6"
                           },
                        children: [
                            {
                            id: "1.4.4.1.1",
                            name: "Carbon offset providers",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.4.1.2",
                            name: "Carbon offset accreditation services",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            },
                            {
                            id: "1.4.4.1.3",
                            name: "Buying and selling carbon offset credits",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#DCCEFA"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                }
            ]
        },
        {
        id: "1.5",
        name: "Culture, systems and processes to enable net zero",
        data: {
           hierarchy: "strategic",
           band: "",
           color: "#54EACE"
           },
        children: [
                {
                id: "1.5.1",
                name: "Creating a culture of sustainability",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
                       {
                        id: "1.5.1.1",
                        name: "Education",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                            {
                            id: "1.5.1.1.1",
                            name: "School programmes",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.1.1.2",
                            name: "Environmental awareness campaigns",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.1.2",
                        name: "Building public connections with non-human nature",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                            {
                            id: "1.5.1.2.1",
                            name: "Reflecting natural forms in the built environment",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.1.2.2",
                            name: "Planting street trees and greening public spaces",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        }

                  ]
                },
                {
                id: "1.5.2",
                name: "Financial capital",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
            {
                        id: "1.5.2.1",
                        name: "Reducing exposure of investments to carbon",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.2.1.1",
                            name: "Green pension/investment funds",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.2.2",
                        name: "Improving finance for net-zero projects",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.2.2.1",
                            name: "Green vehicle finance",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.2.2.2",
                            name: "Green insurance products",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.2.3",
                        name: "Incentivising the market to pursue low-emissions activity",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.2.3.1",
                            name: "Carbon trading and pricing schemes",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.2.3.2",
                            name: "Carbon pricing for suppliers",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.5.3",
                name: "Information on emissions",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
            {
                        id: "1.5.3.1",
                        name: "Monitoring carbon emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.3.1.1",
                            name: "Emissions monitoring software",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.3.1.2",
                            name: "Emissions monitoring hardware",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.3.2",
                        name: "Data sharing between sectors",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.3.2.1",
                            name: "Open data regulations",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.3.3",
                        name: "Spatial mapping of land use and emissions",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.3.3.1",
                            name: "Creating land use and land ownership maps",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.3.3.2",
                            name: "Creating spatial emissions and environmental information maps",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.5.4",
                name: "Policy",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
            {
                        id: "1.5.4.1",
                        name: "Building in low emissions to development",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.4.1.1",
                            name: "Planning policy requiring minimum efficiency standards",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.4.1.2",
                            name: "Spatial planning to encourage active travel ",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.4.1.3",
                            name: "Housing planning alongside public transport planning",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.4.1.4",
                            name: "Planning policy to encourage renewables",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.5.5",
                name: "Skills and human capital",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
            {
                        id: "1.5.5.1",
                        name: "Creating pipeline of skills necessary to achieve net zero in existing disciplines",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.5.1.1",
                            name: "Training providers",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        }
                  ]
                },
                {
                id: "1.5.6",
                name: "Governance models and processes",
                data: {
                   hierarchy: "high",
                   band: "",
                   color: "#79EFD9"
                   },
                children: [
            {
                        id: "1.5.6.1",
                        name: "Corporate memory improvements",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.6.1.1",
                            name: "Management software and tech providers",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.6.2",
                        name: "Procurement changes",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.6.2.1",
                            name: "Procurement consortia for immature markets",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.2",
                            name: "Scoring for carbon impact",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.3",
                            name: "Challenge-based procurement",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.4",
                            name: "Culture challenge in policy vs procurement",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.5",
                            name: "Legal advice to avoid gold-plating procurement law",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.6",
                            name: "Collaborative procurement approaches",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.7",
                            name: "Two-tier procurement approaches",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.2.8",
                            name: "Principle contractors with carbon targets",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }
                          ]
                        },
                        {
                        id: "1.5.6.3",
                        name: "Business cases, modelling and outcomes",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.6.3.1",
                            name: "Consultancy services for exploring business cases",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.3.2",
                            name: "Whole-life costing of products and services",
                            data: {
                               hierarchy: "solution",
                               band: "Established",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.3.3",
                            name: "Carbon budgeting tools",
                            data: {
                               hierarchy: "solution",
                               band: "Emerging",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.3.4",
                            name: "Consolidation of budgets to remove silos",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }                              
                          ]
                        },
                        {
                        id: "1.5.6.4",
                        name: "Engaging citizens in policy",
                        data: {
                           hierarchy: "tactical",
                           band: "",
                           color: "#9EF3E3"
                           },
                        children: [
                {
                            id: "1.5.6.4.1",
                            name: "Participation services",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.4.2",
                            name: "Consultation services",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.4.3",
                            name: "Citizen assemblies and online forums",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            },
                            {
                            id: "1.5.6.4.4",
                            name: "Communications",
                            data: {
                               hierarchy: "solution",
                               band: "Internal",
                               color: "#C3F8EE"
                               },
                            children: []
                            }   
                          ]
                        }
                  ]
                }
            ]
        }]
};
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        levelsToShow: 1,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 100,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            autoHeight: true,  
            align: "center",  
            width: 270,
            type: 'rectangle',
            lineWidth: 2,  
            angularWidth:8, 
            color: '#aaa',
            overridable: true,
            lineWidth: 1
        },
        
        Edge: {
            type: 'bezier',
            overridable: true,
            color: '#52526d', 
            lineWidth: 1
        },
        
        onBeforeCompute: function(node){
            Log.write("loading " + node.name);
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name + "<div style=&quot; height:3px;&quot;></div><a style=&quot;text-transform: uppercase;&quot;>" + node.data.band + "</a>";
            label.onclick = function(){
            	if(normal.checked) {
            	  st.onClick(node.id);
            	} else {
                st.setRoot(node.id, 'animate');
            	}
            };
            //set label styles
            var style = label.style;
            style.width = 260 + 'px';
            style.height = 40 + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '1em';
            style.fontWeight = '800';
            style.textAlign= 'center';
            style.paddingTop = '10px';
            style.paddingLeft = '20px';

        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
    
            }            
            else {
                delete node.data.$color;
                node.data.$color = node.data.color;
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#52526d";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(0, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'), 
        left = $jit.id('r-left'), 
        bottom = $jit.id('r-bottom'), 
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');
        
    
    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };
    
    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end

}
