import React, {Component} from 'react';
import Switch from 'react-switch';
import {toast} from 'react-toastify';

import {Content, Form, Items, Site, Header, Body, Info, Buttons, SitesList, SiteItem, Controls, Span, AddSitesPop, NewSiteInput} from './styles';

import Edit from './Edit';
import EditSite from './EditSite';
import NewType from './NewType';
import {SanctumContext} from "react-sanctum";

class Sites extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            siteId: null,
            edit: false,
            editSite: false,
            addSites: false,
            newSitesNames: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            numberOfNewSites: null,
            new: false,
            sites: [],
            site: null,
            index: null,
            siteIndex: null
        }

        this.loadSites = this.loadSites.bind(this);
        this.submit = this.submit.bind(this);
        this.addSiteType = this.addSiteType.bind(this);
        this.addSites = this.addSites.bind(this);
        this.editSiteType = this.editSiteType.bind(this);
        this.editSite = this.editSite.bind(this);
        this.deleteSiteType = this.deleteSiteType.bind(this);
        this.deleteSite = this.deleteSite.bind(this);
        this.setSiteNames = this.setSiteNames.bind(this);
    }

    async loadSites() {
        await axios.get("/api/v1/get-site-types/"+this.context.property).then(response => {
            this.setState({sites: response.data});
        })
        /*await axios.get("/api/v1/get-site-types/12").then(response => {
            this.setState({sites: response.data});
        })*/
    }

    addSiteType(data) {
        const sites = this.state.sites;

        sites.push(data);

        this.setState({sites: sites, new: false});
    }

    setSiteNames(value, index) {
        const sitesNames = this.state.newSitesNames;

        sitesNames[index] = value;

        this.setState({newSitesNames: sitesNames});
    }

    activateSite(prevStatus, id) {
        let active = prevStatus == null ? 1 : null;
        axios.post("/api/v1/update-status", {
            id: id,
            status: active
        })
        .catch((err) => {
            toast.message(err)
        })
    }

    addSites() {
        const Newsites = [];

        for (let i = 0; i < this.state.numberOfNewSites; i++) {
            let site = {
                name: this.state.newSitesNames[i]
            }

            Newsites.push(site);
        }

        axios.post("/api/v1/add-site", {
            site_id: this.state.site.id,
            sites: JSON.stringify(Newsites),
            count: this.state.numberOfNewSites
        })
        .then(response => {
            if (response.data.type === "success") {
                toast.success(response.data.message)
                const sites = this.state.sites;
                sites[this.state.index].sites = JSON.parse(response.data.sites);
                this.setState({
                    sites: sites,
                    addSites: null,
                    siteId: null
                });
            } else {
                toast.error(response.data.message)
            }
        })
        .catch(response => {
            toast.error(response.message)
            this.setState({
                addSites: null,
                siteId: null
            });
        })
    }

    editSiteType(index, data) {
        const sites = this.state.sites;
        const site = sites[index]
        axios.post("/api/v1/edit-site-type", {
            id: site.id,
            title: data.title,
            price: data.price,
            rv: data.rv,
            pax: data.pax
        })
        .then(response => {
            if (response.data.type === "success") {
              toast.success(response.data.message)
                sites[index] = response.data.site[0]
                sites[index].sites = response.data.sites
                this.setState({sites: sites, edit: false});
            } else {
                toast.error(response.data.message)
            }
        })
        .catch(response => {
            toast.error(response.message)
        })
    }

    editSite(typeIndex, itemIndex, data) {
        const sites = this.state.sites;

        sites[typeIndex].sites[itemIndex] = data;

        this.setState({sites: sites, editSite: false});
    }

    deleteSiteType(index) {
        const sites = this.state.sites;
        axios.post("/api/v1/delete-site-type",{
            id: sites[index].id
        })
        .then(response => {
            if (response.data.type === "success") {
                toast.success(response.data.message)
                sites.splice(index, 1)
                this.setState({sites: sites});
            } else {
                toast.error(response.data.message)
            }
        })
        .catch(response => {
            toast.error(response.message)
        })
    }

    deleteSite(typeIndex, itemIndex) {
        const sites = this.state.sites;

        axios.post("/api/v1/delete-site", {
            id: sites[typeIndex].sites[itemIndex].id
        })
        .then(response => {
            if (response.data.type == "success") {
                toast.success(response.data.message)
                sites[typeIndex].sites.splice(itemIndex, 1);
                this.setState({sites: sites});
            } else {
                toast.error(response.data.message)
            }
        })
        .catch(response => {
            toast.error(response.message)
        })
    }

    submit(e) {
        e.preventDefault();
        if (this.state.sites.length == 0) {
            toast.error('Please add at least one site type.');
            return;
        }

        this.props.nextStep(this.state);
    }

    componentDidMount() {
        this.loadSites();
    }

    render() {
        let hasSites = this.state.sites.length > 0
        return(
            <Content>
                {this.state.addSites &&
                <>
                    <AddSitesPop display="true">
                        <h2>Add new site(s)</h2>

                        <p>Please select how many sites would you like to add</p>

                        <select onChange={(e) => this.setState({numberOfNewSites: e.target.value})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        {this.state.numberOfNewSites &&
                        <>
                            <p>What would be the name of the sites?</p>

                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 0)} display={1 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 1)} display={2 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 2)} display={3 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 3)} display={4 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 4)} display={5 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 5)} display={6 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 6)} display={7 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 7)} display={8 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 8)} display={9 <= this.state.numberOfNewSites ? true : false} />
                            <NewSiteInput type="text" onChange={(e) => this.setSiteNames(e.target.value, 9)} display={10 <= this.state.numberOfNewSites ? true : false} />

                            <button onClick={() => this.addSites()}>Submit</button>
                        </>
                        }
                    </AddSitesPop>
                </>
                }

                {!this.state.edit && !this.state.new && !this.state.editSite &&
                    <Form>
                        <button onClick={() => this.setState({new: true})}>New site type</button>
                        {hasSites ? (
                            <Items>
                                {this.state.sites.map((site, index) => (
                                    <Site>
                                        <Header>
                                            <h2>{site.title}</h2>
                                            <p>${site.price}</p>
                                        </Header>
                                        <Body>
                                            <Info>
                                                <p>{site.pax} Pax</p>
                                                <p>{site.rv} ft Max Length</p>
                                            </Info>
                                            {!this.state.addSites &&
                                            <Buttons>
                                                <p onClick={() => this.setState({site: site, index: index, addSites: true})}>Add sites</p>
                                                <p onClick={() => this.setState({site: site, index: index, edit: true})}>Edit</p>
                                                <p onClick={() => this.deleteSiteType(index)}>Delete</p>
                                            </Buttons>
                                            }

                                            {this.state.addSites && this.state.index == index &&
                                            <Buttons>
                                                <input type='number' min='1' max='5' onChange={(e) => this.setState({numberOfNewSites: e.target.value, siteId: site.id})} />
                                                <p onClick={() => this.addSites()}>Done</p>
                                            </Buttons>
                                            }
                                        </Body>
                                        {!this.state.addSites && site.sites.length > 0 &&
                                        <SitesList>
                                            {site.sites.map((item, itemIndex) => (
                                                <SiteItem>
                                                    <h2>{item.name}</h2>
                                                    <Switch checked={item.active} onChange={() => this.activateSite(item.active,item.id)}/>
                                                    <p onClick={() => this.setState({editSite: true, site: site, index: index, siteIndex: itemIndex})}>Edit</p>
                                                    <p onClick={() => this.deleteSite(index, itemIndex)}>Delete</p>
                                                </SiteItem>
                                            ))}
                                        </SitesList>
                                        }
                                    </Site>
                                ))}
                            </Items>
                        ) : ""}

                        <Controls>
                            <Span onClick={() => this.props.previous()}>Previous</Span>

                            <button onClick={(e) => this.submit(e)}>Proceed</button>
                        </Controls>
                    </Form>
                }

                {this.state.edit &&
                    <Edit
                        index={this.state.index}
                        site={this.state.site}
                        editSite={(index, data) => this.editSiteType(index, data)}
                        goBack={() => this.setState({edit: false})}
                    />
                }

                {this.state.editSite &&
                    <EditSite
                        index={this.state.index}
                        site={this.state.site}
                        siteIndex={this.state.siteIndex}
                        editSite={(typeIndex, siteIndex, data) => this.editSite(typeIndex, siteIndex, data)}
                        goBack={() => this.setState({editSite: false})}
                    />
                }

                {this.state.new &&
                    <NewType
                        addSiteType={(data) => this.addSiteType(data)}
                        goBack={() => this.setState({new: false})}
                    />
                }
            </Content>
        )
    }
}

export default Sites;
