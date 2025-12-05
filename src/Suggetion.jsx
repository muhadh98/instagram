import React from "react";


function SuggestionSidebar() {
    return (
        <div className="card p-4" style={{ width: "450px", margin: "auto", position: "fixed", border: "none" }}>
            {/* Your Profile */}
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="muhaa.dev"
                        className="rounded-circle me-2"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                    <div>
                        <strong>muhaa.dev</strong>
                        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>MohommedMuhadh </p>
                    </div>
                </div>
                <button className="btn btn-sm btn-outline-secondary m-2"> Switch</button>
            </div>

            {/* Suggestions Header */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="fw-bold mb-0">Suggestions For You</p>
                <a href="#" className="text-decoration-none" style={{ fontSize: "0.9rem" }}>See All</a>
            </div>

            {/* Suggested Users */}
            <div>
                {/* Suggestion 1 */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i.pravatar.cc/150?img=18"
                            alt="nuwan.tech"
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <span className="fw-bold">nuwan.tech</span>
                    </div>
                    <button className="btn btn-sm btn-primary">Follow</button>
                </div>

                {/* Suggestion 2 */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i.pravatar.cc/150?img=31"
                            alt="kavi.explorer"
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <span className="fw-bold">kavi.explorer</span>
                    </div>
                    <button className="btn btn-sm btn-primary">Follow</button>
                </div>

                {/* Suggestion 3 */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i.pravatar.cc/150?img=41"
                            alt="lanka_food_crush"
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <span className="fw-bold">lanka_food_crush</span>
                    </div>
                    <button className="btn btn-sm btn-primary">Follow</button>
                </div>

                {/* Suggestion 4 */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i.pravatar.cc/150?img=22"
                            alt="techy_lanka"
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <span className="fw-bold">techy_lanka</span>
                    </div>
                    <button className="btn btn-sm btn-primary">Follow</button>
                </div>
            </div>
        </div>
    );
}

export default SuggestionSidebar;
