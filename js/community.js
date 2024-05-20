function generateCommunityPage() {

    return `
    <p>The Arizona Community Foundation (ACF) is a philanthropic institution that was established in 1978.
     Its mission is to build community philanthropy by connecting donor interests with community needs1. 
     ACF supports Arizona communities through charitable giving and works to improve the quality of life in Arizona by bringing generous donors together
     to invest in communities across the state.The foundation focuses on various areas including arts & culture, community improvement, environment & sustainability, 
     health innovations, sports & athletics, and quality education. It also has initiatives for Asian American, Black, Latino,
     LGBTQ, and Native American philanthropy.ACF has regional offices across Arizona, allowing them to serve specific communities and address local needs effectively.
    They offer a range of services for donors, nonprofits, and communities, aiming to create a lasting impact</p>
    <div id="new-id">
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
        </select>
    </div>
`;
}
export default generateCommunityPage;